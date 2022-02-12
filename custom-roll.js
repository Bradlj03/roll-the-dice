//* Create a new file, `custom-roll.js`, that prompts
// the user for how many sides the dice should hav
//then simulates a roll of a dice with that many sides.

const prompt = require('prompt-sync')(); 
let sides = Number(prompt("How many sides should the dice have"));
let roll = Number(prompt("Enter [1} to roll the dice"));


if (roll ===1) {
    let x= Math.ceil(Math.random()* sides)

   console.log(x)}
   