//Word to guess
const guesses = ["python", "django", "node", "css", "html", "ruby", "rails", "vue", "react", "bootstrap", "javascript", "jquery", "mongo"];


//Select Random Word
var guess = guesses[Math.floor(Math.random() * guesses.length) + 1];


//export guess for use in word.js
module.exports = guess;