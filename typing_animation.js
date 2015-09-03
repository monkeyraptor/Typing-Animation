// Version 2015-09-03
// Additional: adding a <style> tag to control the [::after] element blinking
function typingAnimation(d) {
    "use strict";
    var q = function (a) {
            return d.querySelector(a);
        },
        input_text = q("#inp"), //input element
        button = q("#start"), //button trigger
        output = q("#text_wrap"), //the output
        head = q("head"),
        interval, //timer
        counter = -1; //counter

    function stopAnimation() {
        var style,
            content = ".animation::after{animation:none;-webkit-animation:none}";
        if (!q("#stopAnimation")) {
            style = d.createElement("style");
            style.id = "stopAnimation";
            style.innerHTML = content;
            head.appendChild(style);
        } else {
            if (!q("#stopAnimation").innerHTML) {
                q("#stopAnimation").innerHTML = content;
            }
        }
    }
    function clickFocus() {
        input_text.value = "";
        output.innerHTML = "";
        button.disabled = 0;
    }
    function appearing_character() {
        var split_input = input_text.value.split("");
        stopAnimation();
        if (!split_input) {
            interval = clearInterval(interval);
            output.innerHTML = "enter sumthin";
        } else {
            counter += 1;
            if (counter < split_input.length) {
                output.innerHTML += split_input[counter];
            } else {
                counter = -1;
                q("#stopAnimation").innerHTML = "";
                clearInterval(interval);
            }
        }
    }
    function buttonClick() {
        interval = setInterval(appearing_character, 200);
        button.disabled = 1;
    }

    //TRIGGERS
    input_text.onclick = clickFocus;
    input_text.onfocus = clickFocus;
    button.onclick = buttonClick;
}
typingAnimation(document);
