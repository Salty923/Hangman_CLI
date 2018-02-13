

// create constructor for letters guessed
function Letter(userLetter) {
    this.letter = letter,
    this.match = false;
    this.update = function () {
        if (userLetter = letter) {
            this.match = true;
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