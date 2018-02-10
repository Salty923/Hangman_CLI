

// create constructor for letters guessed
function Letter(letter,guessed) {
    this.letter = letter,
    this.guessed = false;
    this.update = function () {
        if (guessed = letter) {
            this.guessed = true;
            console.log("YOU RIGHT!!! YOU RIGHT!!");
            return this.letter;
        } else {
            console.log("NOPE! Guess again!")
            return "_"
        }
    }
}




//export guess for use in word.js
module.exports = Letter;