/*****
 * Copyright (c) 2017-2023 Kode Programming
 * https://github.com/KodeProgramming/kode/blob/main/LICENSE
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
*****/


/*****
 * Default CSS colors for the built in style sheet.  If the developer does not
 * provide alternate colors in the thunk file, either for the module in general,
 * or for the Webx specifically, use these standard organization colors for the
 * dark and light color schemes of various HTML widgets.
*****/
global.widgetStyleSettings = {
    geom: {
        html_margin_left: '0px',
        html_margin_right: '0px',
        html_margin_top: '0px',
        html_margin_bottom: '0px',
        html_padding_left: '0px',
        html_padding_right: '0px',
        html_padding_top: '0px',
        html_padding_bottom: '0px',
        html_font_size: '15px',
        html_font_family: 'Avenir, Helvetica, Arial, sans-serif',

        body_margin_left: '0px',
        body_margin_right: '0px',
        body_margin_top: '0px',
        body_margin_bottom: '0px',
        body_padding_left: '0px',
        body_padding_right: '0px',
        body_padding_top: '0px',
        body_padding_bottom: '0px',

        h1_font_size: '20px',
        h2_font_size: '18px',
        h3_font_size: '16px',
        h4_font_size: '14px',
        h5_font_size: '13px',
        h6_font_size: '12px',

        h1_margin_top: '10px',
        h2_margin_top: '10px',
        h3_margin_top: '8px',
        h4_margin_top: '8px',
        h5_margin_top: '6px',
        h6_margin_top: '6px',

        h1_margin_bottom: '4px',
        h2_margin_bottom: '4px',
        h3_margin_bottom: '4px',
        h4_margin_bottom: '4px',
        h5_margin_bottom: '3px',
        h6_margin_bottom: '3px',

        input_font_size: '15px',
        input_border_radius: '3px',

        input_margin_left: '0px',
        input_margin_right: '0px',
        input_margin_top: '0px',
        input_margin_bottom: '0px',
        input_padding_left: '3px',
        input_padding_right: '3px',
        input_padding_top: '12px',
        input_padding_bottom: '12px',

        input_border_width: '1px',
        input_border_style: 'solid',
        input_outline_style: 'none',
        input_outline_width: '0px',
        input_hover_border_width: '1px',
        input_hover_border_style: 'solid',
        input_focus_outline_style: 'solid',
        input_focus_outline_width: '2px',
        input_disabled_border_width: '1px',
        input_disabled_border_style: 'solid',
        input_invalid_border_width: '1px',
        input_invalid_border_style: 'solid',

        checkbox_width: '32px',
        checkbox_height: '32px',
        checkbox_margin_left: '0px',
        checkbox_margin_right: '16px',
        checkbox_margin_top: '16px',
        checkbox_margin_bottom: '16px',
        checkbox_padding_left: '0px',
        checkbox_padding_right: '0px',
        checkbox_padding_top: '0px',
        checkbox_padding_bottom: '0px',

        radio_width: '32px',
        radio_height: '32px',
        radio_margin_left: '0px',
        radio_margin_right: '16px',
        radio_margin_top: '16px',
        radio_margin_bottom: '16px',
        radio_padding_left: '0px',
        radio_padding_right: '0px',
        radio_padding_top: '0px',
        radio_padding_bottom: '0px',

        smallbutton_padding_left: '3px',
        smallbutton_padding_right: '3px',
        smallbutton_padding_top: '3px',
        smallbutton_padding_bottom: '3px',
        smallbutton_font_size: '12px',

        dialog_font_size: '15px',
        dialog_border_style: 'solid',
        dialog_border_width: '2px',
        dialog_border_radius: '5px',

        box_border_style: 'solid',
        box_border_width: '1px',
        box_border_radius: '7px',

        label_font_size: '15px',
        label_font_weight: 'bold',

        hrlite_border_color: '#B0C4DE',

        framing_border_style: 'solid',
        framing_border_width: '1px',
        framing_border_radius: '5px',
        framing_margin_left: '0px',
        framing_margin_right: '16px',
        framing_margin_top: '16px',
        framing_margin_bottom: '16px',
        framing_padding_left: '12px',
        framing_padding_right: '12px',
        framing_padding_top: '12px',
        framing_padding_bottom: '12px',

        link_margin_left: '0px',
        link_margin_right: '0px',
        link_margin_top: '6px',
        link_margin_bottom: '6px',
        link_padding_left: '0px',
        link_padding_right: '6px',
        link_padding_top: '3px',
        link_padding_bottom: '3px',
        link_border_style: 'solid',
        link_border_width: '1px',
        link_border_radius: '5px',
        link_outline_style: 'solid',
        link_outline_width: '1px',

        menu_font_size: '17px',
        menu_font_weight: 'Thin',
        menu_font_family: 'Avenir, Helvetica, Arial, sans-serif',
        menu_border_style: 'solid',
        menu_border_width: '1px',
        menu_border_radius: '4px',
        menu_margin_left: '0px',
        menu_margin_right: '0px',
        menu_margin_top: '0px',
        menu_margin_bottom: '0px',
        menu_padding_left: '10px',
        menu_padding_right: '10px',
        menu_padding_top: '10px',
        menu_padding_bottom: '10px',

        menuitem_margin_left: '6px',
        menuitem_margin_right: '6px',
        menuitem_margin_top: '6px',
        menuitem_margin_bottom: '6px',
        menuitem_padding_left: '0px',
        menuitem_padding_right: '0px',
        menuitem_padding_top: '0px',
        menuitem_padding_bottom: '0px',

        menu_separator_style: 'solid',
        menu_separator_width: '1px',

        ctls_horz_margin_left: '0px',
        ctls_horz_margin_right: '0px',
        ctls_horz_margin_top: '2px',
        ctls_horz_margin_bottom: '2px',
        ctls_horz_padding_left: '0px',
        ctls_horz_padding_right: '8px',
        ctls_horz_padding_top: '0px',
        ctls_horz_padding_bottom: '0px',

        ctls_vert_margin_left: '0px',
        ctls_vert_margin_right: '0px',
        ctls_vert_margin_top: '2px',
        ctls_vert_margin_bottom: '2px',
        ctls_vert_padding_left: '0px',
        ctls_vert_padding_right: '8px',
        ctls_vert_padding_top: '0px',
        ctls_vert_padding_bottom: '0px',

        ctl_horz_margin_left: '6px',
        ctl_horz_margin_right: '6px',
        ctl_horz_margin_top: '0px',
        ctl_horz_margin_bottom: '0px',
        ctl_horz_padding_left: '0px',
        ctl_horz_padding_right: '8px',
        ctl_horz_padding_top: '0px',
        ctl_horz_padding_bottom: '0px',

        ctl_vert_margin_left: '0px',
        ctl_vert_margin_right: '0px',
        ctl_vert_margin_top: '3px',
        ctl_vert_margin_bottom: '3px',
        ctl_vert_padding_left: '0px',
        ctl_vert_padding_right: '8px',
        ctl_vert_padding_top: '0px',
        ctl_vert_padding_bottom: '0px',

        navbar_horz_margin_left: '0px',
        navbar_horz_margin_right: '0px',
        navbar_horz_margin_top: '0px',
        navbar_horz_margin_bottom: '0px',
        navbar_horz_padding_left: '0px',
        navbar_horz_padding_right: '0px',
        navbar_horz_padding_top: '0px',
        navbar_horz_padding_bottom: '0px',

        navbar_vert_margin_left: '0px',
        navbar_vert_margin_right: '0px',
        navbar_vert_margin_top: '0px',
        navbar_vert_margin_bottom: '0px',
        navbar_vert_padding_left: '0px',
        navbar_vert_padding_right: '0px',
        navbar_vert_padding_top: '0px',
        navbar_vert_padding_bottom: '0px',

        navinfo_horz_margin_left: '0px',
        navinfo_horz_margin_right: '0px',
        navinfo_horz_margin_top: '0px',
        navinfo_horz_margin_bottom: '0px',
        navinfo_horz_padding_left: '0px',
        navinfo_horz_padding_right: '0px',
        navinfo_horz_padding_top: '0px',
        navinfo_horz_padding_bottom: '0px',

        navinfo_vert_margin_left: '0px',
        navinfo_vert_margin_right: '0px',
        navinfo_vert_margin_top: '0px',
        navinfo_vert_margin_bottom: '0px',
        navinfo_vert_padding_left: '0px',
        navinfo_vert_padding_right: '0px',
        navinfo_vert_padding_top: '0px',
        navinfo_vert_padding_bottom: '0px',
    },

    light: {
        html_color: '#565656',
        body_color: '#565656',
        html_background_color: '#FCFCFC',
        body_background_color: '#FCFCFC',

        h1_color: '#3A3A3A',
        h2_color: '#3A3A3A',
        h3_color: '#3A3A3A',
        h4_color: '#3A3A3A',
        h5_color: '#3A3A3A',
        h6_color: '#3A3A3A',

        input_color: '#3A3A3A',
        input_background_color: '#FCFCFC',
        input_border_color: '#C0C0C0',
        input_outline_color: '#FF8C00',

        input_hover_color: '#3A3A3A',
        input_hover_background_color: '#F7F7F7',
        input_hover_border_color: '#BDB76B',
        input_hover_outline_color: '#FF8C00',

        input_focus_color: '#3A3A3A',
        input_focus_background_color: '#FCFCFC',
        input_focus_border_color: '#C0C0C0',
        input_focus_outline_color: '#FF8C00',

        input_disabled_color: '#787878',
        input_disabled_background_color: '#FCFCFC',
        input_disabled_border_color: '#C0C0C0',
        input_disabled_outline_color: '#C0C0C0',

        input_invalid_color: '#DC143C',
        input_invalid_background_color: '#FFF9F9',
        input_invalid_border_color: '#DC143C',
        input_invalid_outline_color: '#DC143C',

        dialog_color: '#828282',
        dialog_border_color: '#B0C4DE',
        dialog_background_color: '#FCFCFC',

        box_color: '#3A3A3A',
        box_background_color: '#FBFBFF',
        box_border_color: '#AAAAAA',

        label_color: '#4682B4',
        label_background_color: 'transparent',

        link_color: '#3A3A3A',
        link_background_color: '#FCFCFC',
        link_hover_color: '#3A3A3A',
        link_hover_background_color: '#F7F7F7',
        link_border_color: '#C0C0C0',
        link_outline_color: '#FF8C00',

        framing_color: '#565656',
        framing_background_color: '#FBFBFF',
        framing_border_color: '#C0C0C0',

        menu_color: '#2F4F5F',
        menu_background_color: '#F9F9F9',
        menu_border_color: '#C0C0C0',
        menu_hover_color: '#2F4F5F',
        menu_hover_background_color: '#EEEEEE',

        menu_separator_color: '#244F5F',
        menu_separator_lite_color: '#DFDFDF',

        ctl_color: '#3A3A3A',
        ctl_background_color: '#FCFCFC',
        ctl_hover_color: '#3A3A3A',
        ctl_hover_background_color: '#EEEEEE',
        ctl_disabled_color: '#AAAAAA',
        ctl_disabled_background_color: '#FCFCFC',
    },

    dark: {
        /*
        html_color: '#565656',
        body_color: '#565656',
        html_background_color: '#FCFCFC',
        body_background_color: '#FCFCFC',

        h1_color: '#3A3A3A',
        h2_color: '#3A3A3A',
        h3_color: '#3A3A3A',
        h4_color: '#3A3A3A',
        h5_color: '#3A3A3A',
        h6_color: '#3A3A3A',

        input_color: '#3A3A3A',
        input_background_color: '#FCFCFC',
        input_border_color: '#C0C0C0',
        input_outline_color: '#FF8C00',

        input_hover_color: '#3A3A3A',
        input_hover_background_color: '#F7F7F7',
        input_hover_border_color: '#BDB76B',
        input_hover_outline_color: '#FF8C00',

        input_focus_color: '#3A3A3A',
        input_focus_background_color: '#FCFCFC',
        input_focus_border_color: '#C0C0C0',
        input_focus_outline_color: '#FF8C00',

        input_disabled_color: '#787878',
        input_disabled_background_color: '#FCFCFC',
        input_disabled_border_color: '#C0C0C0',
        input_disabled_outline_color: '#C0C0C0',

        input_invalid_color: '#DC143C',
        input_invalid_background_color: '#FFF9F9',
        input_invalid_border_color: '#DC143C',
        input_invalid_outline_color: '#DC143C',

        dialog_color: '#828282',
        dialog_border_color: '#B0C4DE',
        dialog_background_color: '#FCFCFC',

        box_color: '#3A3A3A',
        box_background_color: '#FBFBFF',
        box_border_color: '#AAAAAA',

        label_color: '#4682B4',
        label_background_color: 'transparent',

        link_color: '#3A3A3A',
        link_background_color: '#FCFCFC',
        link_hover_color: '#3A3A3A',
        link_hover_background_color: '#F7F7F7',
        link_border_color: '#C0C0C0',
        link_outline_color: '#FF8C00',

        framing_color: '#565656',
        framing_background_color: '#FBFBFF',
        framing_border_color: '#C0C0C0',

        menu_color: '#2F4F5F',
        menu_background_color: '#F9F9F9',
        menu_border_color: '#C0C0C0',
        menu_hover_color: '#2F4F5F',
        menu_hover_background_color: '#EEEEEE',

        menu_separator_color: '#244F5F',
        menu_separator_lite_color: '#DFDFDF',

        ctl_color: '#3A3A3A',
        ctl_background_color: '#FCFCFC',
        ctl_hover_color: '#3A3A3A',
        ctl_hover_background_color: '#EEEEEE',
        ctl_disabled_color: '#AAAAAA',
        ctl_disabled_background_color: '#FCFCFC',
        */
    }
};