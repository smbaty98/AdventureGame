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

//Player introduction
playerName = readline.question("What is your name? ");
console.log("Welcome " + playerName + "!");
console.log("You are starting with " + playerGold + " gold pieces!");

// Weapon damage
let weaponDamage = 0;
console.log("Starting weapon damage: " + weaponDamage);
console.log("When you buy a sword, weapon damage will increase to 10!");

// Monster defense
let monsterDefense = 5;
console.log("Monster defense: " + monsterDefense);
console.log("Monsters can withstand some damage in combat!");

//health potion
let healingPotionValue = 30;
console.log("Healing Potion Value: " + healingPotionValue);
console.log("A potion will restore 30 health!");

let $myvariable = 2
