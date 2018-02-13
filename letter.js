

// create constructor for letters guessed
function Letter(userGuess) {
    this.answerLetter = answerLetter,
    this.match = false;
    this.update = function () {
        if (userGuess = this.answerLetter) {
            this.match = true;
            return this.answerLetter;
        } else {
            return "_"
        }
    }
}




//export guess for use in word.js
module.exports = Letter;