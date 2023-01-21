/*
    Copyright (c) 2023 Alethea Katherine Flowers.
    Published under the standard MIT License.
    Full text available at: https://opensource.org/licenses/MIT
*/

import { Color } from "../gfx/color";

export const board = {
    anchor: Color.from_css("rgb(100, 203, 150)"),
    aux_items: Color.from_css("rgb(255, 98, 0)"),
    b_adhes: Color.from_css("rgb(0, 0, 132)"),
    b_crtyd: Color.from_css("rgb(174, 129, 255)"),
    b_fab: Color.from_css("rgb(113, 103, 153)"),
    b_mask: Color.from_css("rgba(78, 129, 137, 0.800)"),
    b_paste: Color.from_css("rgba(167, 234, 255, 0.502)"),
    b_silks: Color.from_css("rgb(136, 100, 203)"),
    background: Color.from_css("rgb(19, 18, 24)"),
    cmts_user: Color.from_css("rgb(129, 255, 190)"),
    copper: {
        b: Color.from_css("rgb(111, 204, 219)"),
        f: Color.from_css("rgb(226, 114, 153)"),
        in1: Color.from_css("rgb(127, 200, 127)"),
        in10: Color.from_css("rgb(237, 124, 51)"),
        in11: Color.from_css("rgb(91, 195, 235)"),
        in12: Color.from_css("rgb(247, 111, 142)"),
        in13: Color.from_css("rgb(167, 165, 198)"),
        in14: Color.from_css("rgb(40, 204, 217)"),
        in15: Color.from_css("rgb(232, 178, 167)"),
        in16: Color.from_css("rgb(242, 237, 161)"),
        in17: Color.from_css("rgb(237, 124, 51)"),
        in18: Color.from_css("rgb(91, 195, 235)"),
        in19: Color.from_css("rgb(247, 111, 142)"),
        in2: Color.from_css("rgb(206, 125, 44)"),
        in20: Color.from_css("rgb(167, 165, 198)"),
        in21: Color.from_css("rgb(40, 204, 217)"),
        in22: Color.from_css("rgb(232, 178, 167)"),
        in23: Color.from_css("rgb(242, 237, 161)"),
        in24: Color.from_css("rgb(237, 124, 51)"),
        in25: Color.from_css("rgb(91, 195, 235)"),
        in26: Color.from_css("rgb(247, 111, 142)"),
        in27: Color.from_css("rgb(167, 165, 198)"),
        in28: Color.from_css("rgb(40, 204, 217)"),
        in29: Color.from_css("rgb(232, 178, 167)"),
        in3: Color.from_css("rgb(79, 203, 203)"),
        in30: Color.from_css("rgb(242, 237, 161)"),
        in4: Color.from_css("rgb(219, 98, 139)"),
        in5: Color.from_css("rgb(167, 165, 198)"),
        in6: Color.from_css("rgb(40, 204, 217)"),
        in7: Color.from_css("rgb(232, 178, 167)"),
        in8: Color.from_css("rgb(242, 237, 161)"),
        in9: Color.from_css("rgb(141, 203, 129)"),
    },
    cursor: Color.from_css("rgb(220, 200, 255)"),
    drc_error: Color.from_css("rgba(255, 0, 237, 0.800)"),
    drc_exclusion: Color.from_css("rgba(255, 255, 255, 0.800)"),
    drc_warning: Color.from_css("rgba(255, 208, 66, 0.800)"),
    dwgs_user: Color.from_css("rgb(248, 248, 240)"),
    eco1_user: Color.from_css("rgb(129, 238, 255)"),
    eco2_user: Color.from_css("rgb(255, 129, 173)"),
    edge_cuts: Color.from_css("rgb(129, 255, 190)"),
    f_adhes: Color.from_css("rgb(132, 0, 132)"),
    f_crtyd: Color.from_css("rgb(174, 129, 255)"),
    f_fab: Color.from_css("rgb(113, 103, 153)"),
    f_mask: Color.from_css("rgb(137, 78, 99)"),
    f_paste: Color.from_css("rgba(252, 249, 255, 0.502)"),
    f_silks: Color.from_css("rgb(220, 200, 255)"),
    footprint_text_invisible: Color.from_css("rgb(40, 38, 52)"),
    grid: Color.from_css("rgb(113, 103, 153)"),
    grid_axes: Color.from_css("rgb(255, 129, 173)"),
    margin: Color.from_css("rgb(78, 137, 107)"),
    no_connect: Color.from_css("rgb(255, 148, 0)"),
    pad_plated_hole: Color.from_css("rgb(194, 194, 0)"),
    pad_through_hole: Color.from_css("rgb(227, 209, 46)"),
    plated_hole: Color.from_css("rgb(129, 255, 190)"),
    ratsnest: Color.from_css("rgb(128, 119, 168)"),
    user_1: Color.from_css("rgb(194, 118, 0)"),
    user_2: Color.from_css("rgb(89, 148, 220)"),
    user_3: Color.from_css("rgb(180, 219, 210)"),
    user_4: Color.from_css("rgb(216, 200, 82)"),
    user_5: Color.from_css("rgb(194, 194, 194)"),
    user_6: Color.from_css("rgb(89, 148, 220)"),
    user_7: Color.from_css("rgb(180, 219, 210)"),
    user_8: Color.from_css("rgb(216, 200, 82)"),
    user_9: Color.from_css("rgb(232, 178, 167)"),
    via_blind_buried: Color.from_css("rgb(203, 196, 100)"),
    via_hole: Color.from_css("rgb(40, 38, 52)"),
    via_micro: Color.from_css("rgb(255, 148, 0)"),
    via_through: Color.from_css("rgb(227, 209, 46)"),
    worksheet: Color.from_css("rgb(99, 78, 137)"),
};

export const palette = [
    "rgb(200, 52, 52)",
    "rgb(127, 200, 127)",
    "rgb(206, 125, 44)",
    "rgb(79, 203, 203)",
    "rgb(219, 98, 139)",
    "rgb(167, 165, 198)",
    "rgb(40, 204, 217)",
    "rgb(232, 178, 167)",
    "rgb(242, 237, 161)",
    "rgb(141, 203, 129)",
    "rgb(237, 124, 51)",
    "rgb(91, 195, 235)",
    "rgb(247, 111, 142)",
    "rgb(77, 127, 196)",
];

export const schematic = {
    anchor: "rgb(174, 129, 255)",
    aux_items: "rgb(255, 160, 0)",
    background: "rgb(19, 18, 24)",
    brightened: "rgb(200, 255, 227)",
    bus: "rgb(129, 238, 255)",
    bus_junction: "rgb(163, 243, 255)",
    component_body: "rgb(67, 62, 86)",
    component_outline: "rgb(197, 163, 255)",
    cursor: "rgb(220, 200, 255)",
    erc_error: "rgba(255, 55, 162, 0.800)",
    erc_warning: "rgba(255, 92, 0, 0.800)",
    fields: "rgb(174, 129, 255)",
    grid: "rgb(113, 103, 153)",
    grid_axes: "rgb(255, 129, 173)",
    hidden: "rgb(67, 62, 86)",
    junction: "rgb(220, 200, 255)",
    label_global: "rgb(255, 247, 129)",
    label_hier: "rgb(163, 255, 207)",
    label_local: "rgb(220, 200, 255)",
    no_connect: "rgb(255, 129, 173)",
    note: "rgb(248, 248, 240)",
    pin: "rgb(129, 255, 190)",
    pin_name: "rgb(129, 255, 190)",
    pin_number: "rgb(100, 203, 150)",
    reference: "rgb(129, 238, 255)",
    shadow: "rgb(200, 248, 255)",
    sheet: "rgb(174, 129, 255)",
    sheet_background: "rgb(19, 18, 24)",
    sheet_fields: "rgb(129, 255, 190)",
    sheet_filename: "rgb(78, 129, 137)",
    sheet_label: "rgb(129, 255, 190)",
    sheet_name: "rgb(129, 238, 255)",
    value: "rgb(129, 238, 255)",
    wire: "rgb(174, 129, 255)",
    worksheet: "rgb(99, 78, 137)",
};
