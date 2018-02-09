
var inquirer = require("inquirer");
//var letter = require("letter");
//var word = require("word");

let userGuess =[];


//start the game!
game();



//ask the user if they are ready to play
function game() {
    inquirer.prompt([
        {
            name: "play",
            message: "Are you ready to play?",
            choices: ["yes", "no"],
            type: "rawlist"
        }
    ]).then(function (response) {
        if (response.play === "no") {
            annoy();
        }else{
            //Show user the spaces for the random word chosen
        }
    });
}



    


//repeat this function until user agrees to play!
function annoy() {
        inquirer.prompt([
            {
                name: "now",
                message: "How about now?",
                choices: ["yes", "no"],
                type: "rawlist"
            }
        ]).then(function (response) {
            if (response.now === "no") {
                annoy();
            }
        })
}





//ask the user to guess a letter

//check to see if letter has been guessed already

//check to see if letter matches

//if letter matches, check to see if word is complete

//if letter does not match, take away a guess

//check to see if user has any more guesses if yes, continue

//rerun show spaces and guess letter

