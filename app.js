"use strict";

/*

Things to be done are

1. Add event listeners to all buttons, for
    i. OnClick events.
    ii. OnKeypress events.

2. Toggle/change the innertext property of the display_screen
    as a click event happen with respect to the particular button that  was clicked

3. store the changes of the innertext property of the display screen in a variable


*/


//Create Global variables
let a, aa, b, bb, c, cc, d, dd, ee, f, ff, g, h, i, j, code;

//variable initialization
a = document.querySelectorAll(".numbs");
b = document.querySelectorAll(".symbols");
c = document.getElementById("display-screen");
d = [48,49,50,51,52,53,54,55,56,57,46];
dd = [0,1,2,3,4,5,6,7,8,9,"."];


//Events Listeners

// (CLICK): COMPLETE
Array.from(a).forEach(function(e){
    e.addEventListener("click", function(){
//        console.log(e);
        c.textContent += e.textContent;
    })
});
Array.from(b).forEach(function(item){
    item.addEventListener("click",function(){
        c.textContent += " " + item.textContent + " ";
        console.log(item.textContent);
    })
})

~function getTextContent(item, i){
    if(c.textContent == ""){
        console.log("array is empty");
    }
}();

//(KEYPRESS): COMPLETE
window.addEventListener("keypress", function(e, code){
    code = e.keyCode;
    ee = d.indexOf(code) > -1;
    f = d.indexOf(code);
//    console.log(code);
    if(ee){
        c.innerText += f;
    };
});


//clear textContent of the display-screen
const clearConsole = document.getElementById("reset").addEventListener("click", function(){
    c.textContent = null;
})


// Filter property of an array

let nums = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9];

let starts = [1,3,9,3,7,8,8,2,1,3,5];


let makeSet = function(num, i){
    return num !== nums[ i += 1];
};

let met = starts.filter(makeSet);

let set = nums.filter(makeSet);

console.log(set, met);


// FACTORIAL
function factorial(n){
    let products = 1;
    while (n > 1) {
        products *= n;
        n--;
    }
    return products;
}

function fibonachiSequence(m){
    let products = 1;
    while (m > 1) {
        products += m;
        m--;
    }
    return products;
};




