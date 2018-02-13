
var inquirer = require("inquirer");
var word = require("./word");




//Word to guess
const allWords = ["python", "django", "node", "css", "html", "ruby", "rails", "vue", "react", "bootstrap", "javascript", "jquery", "mongo"];

//Select Random Word
var answer = allWords[Math.floor(Math.random() * allWords.length) + 1];


let userGuess =[];
let userTurns = 10;


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
            play();
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
            }play();
        })
}





//ask the user to guess a letter
function play() {
    
    inquirer.prompt([
        {
            name: "userGuess",
            message: "Choose a letter",
            type: "input"
        }
    ]).then(function (response) {
        //run word function from word.js
        word(answer);
    })
}





//check to see if letter has been guessed already

//check to see if letter matches

//if letter matches, check to see if word is complete

//if letter does not match, take away a guess

//check to see if user has any more guesses if yes, continue

//rerun show spaces and guess letter

