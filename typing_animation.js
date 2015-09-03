// Version 2015-09-03
// Additional: toggling class to control the blinking element
function typingAnimation(d) {
    "use strict";
    var q = function (a) {
            return d.querySelector(a);
        },
        inputText = q("#inp"), //input element
        button = q("#start"), //button trigger
        output = q("#text_wrap"), //the output (this has the ::after)
        interval, //timer
        counter = -1; //counter

    function stopAnimation() {
        output.className = "animation stopAnimate"; //add "stopAnimate" class
    }
    function clickFocus() {
        inputText.value = "";
        output.innerHTML = "";
        button.disabled = 0;
    }
    function appearingChars() {
        var split_input = inputText.value.split("");
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
                output.className = "animation"; //remove the "stopAnimate" class.
                clearInterval(interval);
            }
        }
    }
    function buttonClick() {
        interval = setInterval(appearingChars, 200);
        button.disabled = 1;
    }

    //TRIGGERS
    inputText.onclick = clickFocus;
    inputText.onfocus = clickFocus;
    button.onclick = buttonClick;
}
typingAnimation(document);
