/*
    Copyright (c) 2023 Alethea Katherine Flowers.
    Published under the standard MIT License.
    Full text available at: https://opensource.org/licenses/MIT
*/

import { Color } from "./color.js";
import { Vec2 } from "../math/vec2.js";
import { Renderer, RenderLayer, RenderStateStack } from "./renderer.js";
import { Matrix3 } from "../math/matrix3.js";

/**
 * Canvas2d-based renderer.
 *
 * This renderer works by turning draw calls into DrawCommands - basically
 * serializing them as Path2D + state. These DrawCommands are combined into
 * multiple Layers. When the layers are later drawn, the draw commands are
 * stepped through and draw onto the canvas.
 *
 * This is similar to generating old-school display lists.
 *
 */
export class Canvas2DRenderer extends Renderer {
    /** Graphics layers */
    #layers: Canvas2dRenderLayer[] = [];

    /** The layer currently being drawn to. */
    #active_layer: Canvas2dRenderLayer = null;

    /** State */
    state: RenderStateStack = new RenderStateStack();

    ctx2d: CanvasRenderingContext2D;

    /**
     * Create a new Canvas2DRenderer
     */
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
    }

    /**
     * Create and configure the 2D Canvas context.
     */
    async setup() {
        await super.setup();

        // just in case the browser still gives us a backbuffer with alpha,
        // set the background color of the canvas to black so that it behaves
        // correctly.
        this.canvas.style.backgroundColor = this.background_color.to_css();

        const ctx2d = this.canvas.getContext("2d", { alpha: false });

        if (ctx2d == null) {
            throw new Error("Unable to create Canvas2d context");
        }

        this.ctx2d = ctx2d;
        this.set_viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    set_viewport(x: number, y: number, w: number, h: number) {
        const dpr = window.devicePixelRatio;
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = Math.round(rect.width * dpr);
        this.canvas.height = Math.round(rect.height * dpr);
        this.ctx2d.setTransform();
    }

    clear_canvas() {
        this.ctx2d.setTransform();
        this.ctx2d.scale(window.devicePixelRatio, window.devicePixelRatio);
        this.ctx2d.fillStyle = this.background_color.to_css();
        this.ctx2d.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx2d.lineCap = "round";
        this.ctx2d.lineJoin = "round";
    }

    start_layer(name: string, depth = 0) {
        this.#active_layer = new Canvas2dRenderLayer(this, name, depth);
    }

    end_layer(): RenderLayer {
        if (this.#active_layer == null) throw new Error("No active layer");

        this.#layers.push(this.#active_layer);
        this.#active_layer = null;

        return this.#layers.at(-1);
    }

    circle(point: Vec2, radius: number, color: Color) {
        if (this.#active_layer == null) throw new Error("No active layer");

        point = this.state.matrix.transform(point);

        const path = new Path2D();
        path.arc(point.x, point.y, radius, 0, Math.PI * 2);

        this.#active_layer.commands.push(new DrawCommand(path, color.to_css(), null, 0));

        this.add_object_points([
            point.add(new Vec2(radius, radius)),
            point.sub(new Vec2(radius, radius)),
        ]);
    }

    arc(
        point: Vec2,
        radius: number,
        start_angle: number,
        end_angle: number,
        width: number,
        color: Color
    ) {
        if (this.#active_layer == null) throw new Error("No active layer");

        point = this.state.matrix.transform(point);

        const path = new Path2D();
        path.arc(point.x, point.y, radius, start_angle, end_angle);

        this.#active_layer.commands.push(new DrawCommand(path, null, color.to_css(), width));

        // TODO: Use arc start/mid/end instead of just the whole circle
        this.add_object_points([
            point.add(new Vec2(radius, radius)),
            point.sub(new Vec2(radius, radius)),
        ]);
    }

    line(points: Vec2[], width: number, color: Color) {
        if (this.#active_layer == null) throw new Error("No active layer");

        points = Array.from(this.state.matrix.transform_all(points));

        const path = new Path2D();
        let started = false;

        for (const point of points) {
            if (!started) {
                path.moveTo(point.x, point.y);
                started = true;
            } else {
                path.lineTo(point.x, point.y);
            }
        }

        this.#active_layer.commands.push(new DrawCommand(path, null, color.to_css(), width));

        // TODO: take width into account?
        this.add_object_points(points);
    }

    polygon(points: Vec2[], color: Color) {
        if (this.#active_layer == null) throw new Error("No active layer");

        points = Array.from(this.state.matrix.transform_all(points));

        const path = new Path2D();
        let started = false;

        for (const point of points) {
            if (!started) {
                path.moveTo(point.x, point.y);
                started = true;
            } else {
                path.lineTo(point.x, point.y);
            }
        }
        path.closePath();

        this.#active_layer.commands.push(new DrawCommand(path, color.to_css(), null, 0));

        this.add_object_points(points);
    }

    get layers() {
        const layers = this.#layers;
        return {
            *[Symbol.iterator]() {
                for (const layer of layers) {
                    yield layer;
                }
            },
        };
    }
}

class DrawCommand {
    constructor(
        public path: Path2D,
        public fill: string | null,
        public stroke: string | null,
        public stroke_width: number
    ) {}

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = this.stroke_width;
        if (this.fill) {
            ctx.fill(this.path);
        }
        if (this.stroke) {
            ctx.stroke(this.path);
        }
    }
}

class Canvas2dRenderLayer extends RenderLayer {
    constructor(
        public readonly renderer: Renderer,
        public readonly name: string,
        public readonly depth: number = 0,
        public commands: DrawCommand[] = []
    ) {
        super(renderer, name, depth);
    }

    clear() {
        this.commands = [];
    }

    draw(transform: Matrix3) {
        const ctx = (this.renderer as Canvas2DRenderer).ctx2d;
        ctx.save();

        const accumulated_transform = Matrix3.from_DOMMatrix(ctx.getTransform());
        accumulated_transform.multiply_self(transform);
        ctx.setTransform(accumulated_transform.to_DOMMatrix());

        for (const command of this.commands) {
            command.draw(ctx);
        }

        ctx.restore();
    }
}
