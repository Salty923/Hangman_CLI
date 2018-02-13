var guess = require("./letter.js");

function Word(answer) {
    //answer generated in index
    this.answer = answer;
    //letters of the answer
    this.answerLetters = [];
    this.display = [];
    //function to push letters into letters aray
    for (var i = 0; i < answer.length; i++) {
        this.answerLetters.push(answer[i]); 
        this.display.push("_");   
    }
    
    console.log(answerLetters);
    console.log(display.join(" "));
}


// guess.prototype.dashDisplay = function () {
//     //store dashed for each letter of the guess
//     var dashes = [];
//     //dash symbol to use
//     var dash = "_";
//     //loop through length to find word lenght
//     for (var i = 0; i < guess.length; i++) {
//         //put dashes in HTML//
//         dashes.push(dash);
//     }
//     var display = dashes.join(' ');	
//     console.log(guess);
//     console.log(display);
// };


//export guess for use in word.js
module.exports = Word;
