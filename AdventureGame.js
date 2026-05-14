/* 
Adventure Game
this game will be a text based game where the player wil be able to make
choices that affect the outcome of their game
*/

const readline = require("readline-sync");

// DIsplay the game title
console.log("Welcome to the Adventure Game!");

console.log("Prepare yourself for an epic journey!");

let playerName = "";
let playerHealth = 100;
let playerGold = 25;
let currentLocation = "Village";
let gameRunning = true;
let inventory = [];

playerName = readline.question("What is your name? ");
console.log("Welcome " + playerName + "!");
console.log("You are starting with " + playerGold + " gold pieces!");
