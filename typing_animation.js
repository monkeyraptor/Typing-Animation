//global variables
var d = document, //document
    input_text = d.getElementById("inp"), //input element
    button = d.getElementById("start"), //button trigger
    output = d.getElementById("text_wrap"), //the output
    interval, //timer
    appearing_character, //function for the timer
    counter = -1; //counter
    
/*===========================================*/
//when text input element is clicked or focused
input_text.onclick = input_text.onfocus = function () {
    "use strict";
    
    //reset the input and output; make them have nothing
    this.value = output.innerHTML = "";
    
    //enable the button trigger
    button.disabled = false;
};

/*===========================================*/
//when button trigger is clicked
button.onclick = function () {
    "use strict";
    
    //set a timer, with 200ms of duration
    interval = setInterval(appearing_character, 200);
    
    //disable this button
    button.disabled = true;
};

/*===========================================*/
//the function for outputting each character
appearing_character = function () {
    "use strict";
    
    //split the text (then becomes an array), then get the length of that array
    var split_input = input_text.value.split(""), split_input_length = split_input.length;
    
    //if there's no input, but the button is clicked, then...
    if (split_input_length === 0 || isNaN(split_input_length)) {
        interval = clearInterval(interval); //set the timer off
        output.innerHTML = "enter sumthin";
    } else { //if there is input, then...
        counter += 1; //increase the counter by one
        
        /*===========================================*/
        /*iteration conditions*/
        //if the counter is smaller than the split array length, then...
        if (counter < split_input_length) {
            //print a particular array element with the counter index
            output.innerHTML += split_input[counter];
        } else { //when the counter is equal to the length of the array, then...
            interval = clearInterval(interval); //set the timer off
            counter = -1; //reset the counter
        }
    }
};
