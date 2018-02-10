var guess = require("./letter.js");


function Word(answer) {
    this.answer = answer;
    this.letters = [];
    this.allLetters = function name(params) {
          
    }
    for (var i = 0; i < answer.length; i++) {
        this.answer.push(answer[i]);
    }
}


guess.prototype.dashDisplay = function () {
    //store dashed for each letter of the guess
    var dashes = [];
    //dash symbol to use
    var dash = "_";
    //loop through length to find word lenght
    for (var i = 0; i < guess.length; i++) {
        //put dashes in HTML//
        dashes.push(dash);
    }
    var display = dashes.join(' ');	
    console.log(guess);
    console.log(display);
};


//export guess for use in word.js
module.exports = Word;
