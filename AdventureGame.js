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

let startingLocation = "village";
let firstTime = true;
console.log("Starting Location: " + startingLocation);
console.log("First time player: " + firstTime)

if (startingLocation === "village") {
    console.log("You see a small village surrounded by hills and a forest.");
    console.log("What would you like to do next?")
    console.log("1. Go to blacksmith");
    console.log("2. Go to the market");
    console.log("3. Enter the forest");
    console.log("4. Check status");
    console.log("5. Quit game");

    if (firstTime) {
        console.log("Villager: Welcome traveler! Rumor has it there's a dragon in the forest...");
        firstTime = false;
    }
}
else if (startingLocation === "blacksmith") {
    console.log("Welcome to the blacksmith's!");
    console.log("Where do you want to go?");
    console.log("1. Back to the village");
    console.log("2. Check status");
    console.log("3. Quit game");
}

let choice = readline.question("Enter choice number: ");
let choiceNumber = parseInt(choice);

if (startingLocation === "village") {
    if (choiceNumber === 1) {
        startingLocation = "blacksmith";
        console.log("Welcome to the blacksmith's!");
    }
    else if (choiceNumber === 2) {
        console.log("Welcome to the market!");
    }
    else if (choiceNumber === 3) {
        console.log("You follow a dark path into the forest...");
    }
    else if (choiceNumber === 4) {
        console.log("===" + playerName + "'s status ===");
        console.log("Health: " + playerHealth);
        console.log("Gold: " + playerGold);
        console.log("Location: " + startingLocation);
    }
    else if (choiceNumber === 5) {
        console.log("Goodbye brave adventurer!");
    }
    else {
        console.log("Invalid choice, choose 1-5");
    }
}
else if (startingLocation === "blacksmith") {
    if (choiceNumber ===1) {
        startingLocation = "village";
        console.log("You return to the village");
    }
    else if (choiceNumber === 2) {
        console.log("===" + playerName + "'s status ===");
        console.log("Health: " + playerHealth);
        console.log("Gold: " + playerGold);
        console.log("Location: " + startingLocation);
    }
    else if (choiceNumber === 3) {
        console.log("Goodbye brave adventurer!");
    } else {
     console.log("Invalid choice, choose 1-3");
}
}
