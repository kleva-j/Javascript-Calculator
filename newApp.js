// //To create a mapEach function that is immutable and returns an array that pass the test

// var std = [1,2,3,4,5,6,7];

// function mapEach(arr, fn){
//     newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr.push(fn(arr[i]));
//     };
//     return newArr;
// };


// var str = mapEach(std, function(item){
//     return item * 3;
// })
// //console.log(str);

// var strr = mapEach(str, function(item){
//         return str !== item[ str += 1];
// });

// strr.push(12, 99);

~function powerToogle(){
    var powerOn = document.getElementById("on"),
        powerOff = document.getElementById("off"),
        switch2 = document.getElementById("switch2").addEventListener("click", function(e){
            powerOff.style.display = "none";
            let display = document.getElementById("display");
            display.innerText = "Welcome";
            display.style.fontSize = "36px";
            display.style.paddingLeft = "40px";
            display.style.fontFamily = "monaco";
            display.style.fontWeight = "700";

            setTimeout(function(a){
                display.innerText = null;
            }, 2800);
        });
}();
