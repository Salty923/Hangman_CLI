var guess = require("./letter.js");

function Word(answer) {
    //answer letters into array
    this.answerLetters = answer.split("");
    //dashes for display
    var display = [];
    //function to push guess into letters aray
    for (var i = 0; i < answer.length; i++) {
        display.push("_");
        
    }
    // console.log(answerLetters.join(""));
    console.log(display.join(" "));
}



//export guess for use in word.js
module.exports = Word;
