//To create a mapEach function that is immutable and returns an array that pass the test

var std = [1,2,3,4,5,6,7];

function mapEach(arr, fn){
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    };
    return newArr;
};


var str = mapEach(std, function(item){
    return item * 3;
})
//console.log(str);

var strr = mapEach(str, function(item){
        return str !== item[ str += 1];
});

strr.push(12, 99);

function powerToogle(){
    var powerOn = document.getElementById("on"),
        powerOff = document.getElementById("off"),
        switch2 = document.getElementById("switch2").addEventListener("click", function(e){
            console.log(e.target);
        }),
        indicator;
}
