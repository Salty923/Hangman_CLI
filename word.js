var guess = require("./letter.js");



// create constructor for dashed array and gameplay


//store dashed for each letter of the guess
var dashes = [];

//dash symbol to use
var dash = "_";


for (var i = 0; i < guess.length; i++) {
    //put dashes in HTML//
    dashes.push(dash);
}

var display = dashes.join(' ');	

console.log(guess);
console.log(display);