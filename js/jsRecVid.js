/*!
 * jsRecVid
 * Copyright (c) 2021 Dan B. (http://eskolar.com)
 * <script src="https://cdn.jsdelivr.net/gh/layerswing/jsRecVid@main/js/jsRecVid.js"></script>
 * https://github.com/layerswing/jsRecVid
 * Licensed same as jquery - under the terms of the MIT License
 * http://www.opensource.org/licenses/mit-license.php
 */
var gl_int_jsRecVid_version = 2021122805;
var gl_b_jsRecVid_Mode = false;
var gl_b_jsRecVid_editor_Mode = false;
var gl_s_jsRecVid_id = "bkb_vidrec";
var gl_s_jsRecVid_id_ed = "bkb_vidrec_txt_area";
var gl_int_jsRecVid_next_el = 0;
var gl_int_el_w = 300;
var gl_int_el_h = 100;

var gl_s_arr_txt = [
    "one",
    "two",
    "three",
    "four"

];

function bvr_init() {
    let $div = $('<div />').appendTo('body');
    $div.attr('id', gl_s_jsRecVid_id);

    let $div2 = $('<div />').appendTo('body');
    $div2.attr('id', gl_s_jsRecVid_id_ed);

    // transform: "translate(-50%,-50%)",
    // borderRadius: "50%",
    $div.css({
        position: "absolute",
        top: "-1000px",
        left: "-1000px",
        width: gl_int_el_w,
        height: gl_int_el_h,
        backgroundColor: "red",
        color: "white",
        font_size: "16px",
        border: "2px solid black",
        _zIndex: "100000"
    })
    //
    $div2.css({
        position: "absolute",
        top: "-1000px",
        left: "-1000px",
        width: "700px",
        height: "400px",
        backgroundColor: "#efefef",
        color: "black",
        font_size: "14px",
        border: "2px solid black",
        _zIndex: "99999"
    })
}


$(function () {
    bvr_init();
});

function bvr_show_editor() {
    let ed = '#' + gl_s_jsRecVid_id_ed;
    $(ed).css({
        top: 200,
        left: 200
    });
    $(ed).append('<textarea id="ta_jsRecVid_ed" class=""><b>|</b></textarea>');
    $("#ta_jsRecVid_ed").css({
        col: 40,
        rows: 400,
        width: "690px",
        height: "390px",
        backgroundColor: "#ffcc00",
        color: "black",
        font_size: "14px",
        border: "2px dotte black"
    })
    let mystring = "";
    for (let i = 0; i < gl_s_arr_txt.length; i++) {
        mystring += gl_s_arr_txt[i] + "\n";
    }
    $("#ta_jsRecVid_ed").val(mystring);
}

document.onkeydown = function (e) {
    console.log("keyCode ", e.key, e.keyCode);
    let m_k = e.key;
    switch (m_k) {
        case "Escape":
            if (!gl_b_jsRecVid_Mode) {
                console.log('Escape pressed, gl_b_jsRecVid_Mode:', gl_b_jsRecVid_Mode);
                gl_b_jsRecVid_Mode = true;
                if (gl_b_jsRecVid_Mode) {
                    $("#" + gl_s_jsRecVid_id).html(gl_s_arr_txt[gl_int_jsRecVid_next_el]);

                }
            }
            break;
        case "ArrowRight":
            if (gl_b_jsRecVid_Mode) {
                if (gl_int_jsRecVid_next_el < gl_s_arr_txt.length) {
                    gl_int_jsRecVid_next_el++;
                }

            }
            break;
        case "ArrowLeft":
            if (gl_b_jsRecVid_Mode) {
                if (gl_int_jsRecVid_next_el > 0) {
                    gl_int_jsRecVid_next_el--;
                }
            }
            break;
        case "e":
            if (gl_b_jsRecVid_Mode) {
                if (!gl_b_jsRecVid_editor_Mode) {
                    gl_b_jsRecVid_editor_Mode = true;
                    bvr_show_editor();
                }

            }
            break;
    }
};

document.onkeyup = function (e) {
    let m_k = e.key;
    switch (m_k) {
        case "Escape":

            if (gl_b_jsRecVid_Mode) {
                console.log('Escape released, gl_b_jsRecVid_Mode:', gl_b_jsRecVid_Mode);
                gl_b_jsRecVid_Mode = false;
                $('#' + gl_s_jsRecVid_id).css({
                    top: "-200",
                    left: "-200"
                });
            }
            break;

        case "q":
            console.log("ez q");
            if (gl_b_jsRecVid_Mode) {
                if (gl_b_jsRecVid_editor_Mode) {
                    gl_b_jsRecVid_editor_Mode = false;

                    let my_str = $("#ta_jsRecVid_ed").val();
                    // console.log("my_str ", my_str);
                    gl_s_arr_txt = my_str.split("\n");

                    $('#' + gl_s_jsRecVid_id_ed).css({
                        top: "-1000",
                        left: "-1000"
                    });
                    $("#ta_jsRecVid_ed").remove();
                }
            }
            break;

    }

};

// https://levelup.gitconnected.com/use-javascript-to-make-an-element-follow-the-cursor-3872307778b4
// https://stackoverflow.com/a/40394477
// https://stackoverflow.com/a/3385953
$(document).bind('mousemove', function (e) {
    if (gl_b_jsRecVid_Mode) {
        $('#' + gl_s_jsRecVid_id).css({
            left: e.pageX + 10,
            top: e.pageY + 10
            // top: e.pageY - $("#" + gl_s_jsRecVid_id).height() / 2, // just minus by half the height
            // left: e.pageX - $("#" + gl_s_jsRecVid_id).width() / 2 // just minus by half the width
        });
    }


});


/*
document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        // if (event.code === 'KeyQ') {
        if (!gl_b_jsRecVid_Mode) {
            console.log('Escape pressed, gl_b_jsRecVid_Mode:', gl_b_jsRecVid_Mode);
            gl_b_jsRecVid_Mode = true;
        }


    }

});

document.addEventListener('keyup', event => {
    if (event.code === 'Escape') {
        // if (event.code === 'KeyQ') {
        if (gl_b_jsRecVid_Mode) {
            console.log('Escape released, gl_b_jsRecVid_Mode:', gl_b_jsRecVid_Mode);
            gl_b_jsRecVid_Mode = false;
            $('#' + gl_s_jsRecVid_id).css({
                top: "-200",
                left: "-200"
            });
        }

    }

});*/


/*document.addEventListener('mousemove', function (e) {
    let body = document.querySelector('body');
    let el_move = document.getElementById(gl_s_jsRecVid_id);
    let left = e.offsetX - 100;
    let top = e.offsetY + 100;
    el_move.style.left = left + 'px';
    el_move.style.top = top + 'px';
});*/

