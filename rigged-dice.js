// * Create a new file, `rigged-dice.js`, which prompts the user first for a number 
//of sides, then for a rigged number. The dice should roll the rigged number twice 
//as frequently as the other numbers!

const prompt = require('prompt-sync')(); 
let numSides = Number(prompt("How many sides should the dice have"));

if (numSides === 0 || numSides ===1){
    console.log("Error this is not a die")
}

let randNum = Math.random();

let dice = Math.ceil(randNum * numSides);

console.log(" Your number is" + dice);