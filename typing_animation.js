// Version 2015-09-03
// Additional: toggling class to control the blinking element
// Version 2015-09-03
// Additional: adding a <style> tag to control the [::after] element blinking
function typingAnimation(d) {
    "use strict";
    var q = function (a) {
            return d.querySelector(a);
        },
        inputText = q("#inp"), //input element
        button = q("#start"), //button trigger
        output = q("#text_wrap"), //the output
        interval, //timer
        counter = -1; //counter

    function stopAnimation() {
        if (output.className !== "animation stopAnimate") {
            output.className = "animation stopAnimate";
        }
    }
    function animate() {
        if (output.className !== "animation") {
            output.className = "animation";
        }
    }
    function clickFocus() {
        inputText.value = "";
        output.innerHTML = "";
        button.disabled = 0;
    }
    function appearingChars() {
        var split_input = inputText.value.split("");
        stopAnimation();
        if (!split_input.length) {
            output.innerHTML = "enter sumthin";
            animate();
            interval = clearInterval(interval);
        } else {
            counter += 1;
            if (counter < split_input.length) {
                output.innerHTML += split_input[counter];
            } else {
                counter = -1;
                animate();
                clearInterval(interval);
            }
        }
    }
    function buttonClick() {
        interval = setInterval(appearingChars, 100);
        button.disabled = 1;
    }

    //TRIGGERS
    inputText.onclick = clickFocus;
    inputText.onfocus = clickFocus;
    button.onclick = buttonClick;
}
typingAnimation(document);
