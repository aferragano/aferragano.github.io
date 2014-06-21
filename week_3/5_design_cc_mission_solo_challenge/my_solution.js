// This is a solo challenge

// Your mission description:
// Have character "Onaga" get sword   
// Kill the three Dragons
// have Onaga Take the dragons Eggs
// 

// Pseudocode
// Onaga has no sword no goldenegg health 100 
// dragon has goldenegg health 100
// attack = health - 50
// onaga gets sword
// onaga kills dragon with sword
// onaga takes the egg
//functions/ take (take sword) 
// take golden egg

// Initial Code
var onaga = {
	name:"Onaga",
	health: 100,
	objectEggs: "",
};
window.alert("Your name is " + onaga.name + " and you have to defeat three dragons. Each dragon guards an egg. Collect all three eggs to win!");

var dragon = {
	name:"Lake Dragon",
	health: 100,
	object: "Golden Egg",
};

var dragon2 = {
	name:"Desert Dragon",
	health: 100,
	object: "Crystal Egg",
};

var dragon3 = {
	name:"Mountain Dragon",
	health: 150,
	object: "Platinum  Egg",
};

var heart = function(health) {
	return onaga.health = onaga.health + 70,
	window.alert("Let me get more health before I collect my next egg, and defeat my next dragon!"),
};

var sheildsword = function(health) {
	return onaga.health = onaga.health + 50,
	onaga.objectS= "Aloominuim Sheild",
	onaga.object= "Slayer Sword",
	window.alert("What is over there? Oh wow! a " + onaga.objectS + " and a " + onaga.object +"! Now I can take on the baddest dragon of them all!"),
};

var attackDragon = function(health) {
	return dragon.health = dragon.health -50,
};
var attackDragon2 = function(health) {
	return dragon2.health = dragon2.health -50,
};
var attackDragon3 = function(health) {
	return dragon3.health = dragon3.health -50,
};

var attackOnaga = function(health) {
	return onaga.health = onaga.health -50,
};
//you found a sword do you want it. if true, onaga gets sword


var swordQ = window.alert("You found a sword. Do you want to pick it up?");
if (swordQ = true) {
	onaga.object = "sword",
} else {
	onaga.object = "" ,
};


window.alert("You have found the " + dragon.name + ". It's health is " + dragon.health + ", " + onaga.name + "Onaga's health is " + onaga.health);

var attackd1 = prompt("Type 'attack' to attack the dragon!")
if (attackd1 = "attack"){
	attackDragon(dragon);
	window.alert(dragon.name + " " + dragon.health + "," + onaga.name + " " + onaga.health);
} else {
	console.log("this is NOT good")
};

attackd1
		// attackDragon(dragon);
		// window.alert(dragon.name + " " + dragon.health + "," + onaga.name + " " + onaga.health);

attackOnaga(onaga);
window.alert(dragon.name + " " + dragon.health + "," + onaga.name + " " + onaga.health);
attackd1
		// attackDragon(dragon);
		// window.alert(dragon.name + " " + dragon.health + "," + onaga.name + " " + onaga.health);
attackOnaga(onaga);
window.alert(dragon.name + " " + dragon.health + "," + onaga.name + " " + onaga.health);
if (dragon.health<=0){
	delete dragon.object;
	onaga.objectEggs = "Golden Egg",
	window.alert(onaga.name + " has defeated the " + dragon.name + " and received the Golden Egg!");
};

if (onaga.health <= 0){
	window.alert(onaga.name +" has been defeated the " + dragon.name + "...");
	window.alert("... lets get your health back up and move on!");
	onaga.health = 100
};




heart(onaga);

attackDragon2(dragon2);
console.log(dragon2.name + " " + dragon2.health + "," + onaga.name + " " + onaga.health);

attackOnaga(onaga.health);
console.log(dragon2.name + " " + dragon2.health + "," + onaga.name + " " + onaga.health);

attackDragon2(dragon2);
console.log(dragon2.name + " " + dragon2.health + "," + onaga.name + " " + onaga.health);

if (dragon2.health<=0){
	delete dragon2.object;
	onaga.objectEggs = "Golden Egg",
	console.log(onaga.name + " has defeated the " + dragon2.name + " and received the Crystal Egg!");
};

if (onaga.health <= 0){
	window.alert(onaga.name +" has been defeated the " + dragon2.name + "...");
	window.alert("... lets get your health back up and move on!");
	onaga.health = 100;
};


sheildsword(onaga);

attackDragon3(dragon3);
console.log(dragon3.name + " " + dragon3.health + "," + onaga.name + " " + onaga.health);
attackDragon3(dragon3);
console.log(dragon3.name + " " + dragon3.health + "," + onaga.name + " " + onaga.health);

attackOnaga(onaga);
console.log(dragon3.name + " " + dragon3.health + "," + onaga.name + " " + onaga.health);
attackOnaga(onaga);
console.log(dragon3.name + " " + dragon3.health + "," + onaga.name + " " + onaga.health);

attackDragon3(dragon3);
console.log(dragon3.name + " " + dragon3.health + "," + onaga.name + " " + onaga.health);

if (dragon3.health<=0){
	delete dragon3.object;
	console.log(onaga);
	onaga.objectEggs = "Platinum  Egg",
	console.log(onaga.name + " has defeated the " + dragon3.name + " and received the Platinum  Egg! The end!");
	window.alert(onaga.name + " has defeated the " + dragon3.name + " and received the Platinum  Egg! The end!");
};

if (onaga.health <= 0){
	window.alert(onaga.name +" has been defeated the " + dragon3.name + "...");
	window.alert("... lets get your health back up and move on!");
	onaga.health = 100
};
// Refactored Code
var onaga = {
	name:"Onaga",
	health: 100,
	objectEggs: "",
};
window.alert("Your name is " + onaga.name + " and you have to defeat three dragons. Each dragon guards an egg. Collect all three eggs to win!");
var dragon = {
	name:"Lake Dragon",
	health: 100,
	object: "Golden Egg"
};
var dragon2 = {
	name:"Desert Dragon",
	health: 100,
	object: "Crystal Egg"
};
var dragon3 = {
	name:"Mountain Dragon",
	health: 150,
	object: "Platinum  Egg"
};
var heart = function(health) {
	return (onaga.health + 55),
	alert("Lets get more health before I collect my next egg, and defeat my next dragon!")
};
var sheildsword = function(health) {
	return onaga.health = onaga.health + 50,
	onaga.objectS= "Aloominuim Sheild",
	onaga.object= "Slayer Sword",
	alert("What is over there? Oh wow! a " + onaga.objectS + " and a " + onaga.object +"! Now I can take on the baddest dragon of them all!")
};
var attackDragon = function(health) {
	return dragon.health = dragon.health -50
};
var attackDragon2 = function(health) {
	return dragon2.health = dragon2.health -50
};
var attackDragon3 = function(health) {
	return dragon3.health = dragon3.health -50
};
var attackOnaga = function(health) {
	return onaga.health = onaga.health -50
};

swordQ = window.alert("You found a sword. Do you want to pick it up?");
if (swordQ = true) {
	onaga.object = "sword"
} else {
	onaga.object = "" 
}
window.alert("You have found the " + dragon.name + ". It's health is " + dragon.health + ", " + onaga.name + "Onaga's health is " + onaga.health);
		// function attackd1 () {
		// 	var ans = prompt("Type 'attack' to attack the dragon!")
		// if (attackd1 = "attack"){
		// 	attackDragon(dragon),
		// 	window.alert(dragon.name + " " + dragon.health + "," + onaga.name + " " + onaga.health)
		// } else {
		// 	console.log("this is NOT good")
		// }}
attackDragon(dragon);
		// attackDragon(dragon);
		// window.alert(dragon.name + " " + dragon.health + "," + onaga.name + " " + onaga.health);

attackOnaga(onaga);
window.alert(dragon.name + " " + dragon.health + "," + onaga.name + " " + onaga.health);
attackDragon(dragon);
		// attackDragon(dragon);
		// window.alert(dragon.name + " " + dragon.health + "," + onaga.name + " " + onaga.health);
attackOnaga(onaga);

window.alert(dragon.name + " " + dragon.health + "," + onaga.name + " " + onaga.health);
if (dragon.health<=0){
	delete dragon.object;
	onaga.objectEggs = "Golden Egg",
	window.alert(onaga.name + " has defeated the " + dragon.name + " and received the Golden Egg!")
};

if (onaga.health <= 0){
	window.alert(onaga.name +" has been defeated by the " + dragon.name + "...");
	window.alert("... lets get your health back up and move on!");
	onaga.health = 100;
	window.alert(onaga.name + " now has " + onaga.health)
};

heart(onaga);
var attackd2 = prompt("Type 'attack' to attack the dragon!")
if (attackd2 = "attack"){
	attackDragon2(dragon2),
	window.alert(dragon2.name + " " + dragon2.health + "," + onaga.name + " " + onaga.health)
} else {
	console.log("this is NOT good")
};

attackDragon2(dragon2);
window.alert(dragon2.name + " " + dragon2.health + "," + onaga.name + " " + onaga.health);
attackOnaga(onaga.health);
window.alert(dragon2.name + " " + dragon2.health + "," + onaga.name + " " + onaga.health);
attackDragon2(dragon2);
window.alert(dragon2.name + " " + dragon2.health + "," + onaga.name + " " + onaga.health);

if (dragon2.health<=0){
	delete dragon2.object,
	onaga.objectEggs = "Golden Egg",
	alert(onaga.name + " has defeated the " + dragon2.name + " and received the Crystal Egg!")
};

if (onaga.health <= 0){
	window.alert(onaga.name +" has been defeated by the " + dragon2.name + "...");
	window.alert("... lets get your health back up and move on!");
	onaga.health = 100;
	window.alert(onaga.name + " now has " + onaga.health)
};

sheildsword(onaga);
attackDragon3(dragon3);
attackDragon3(dragon3);
window.alert(dragon3.name + " " + dragon3.health + "," + onaga.name + " " + onaga.health);

attackOnaga(onaga);
attackOnaga(onaga);
window.alert(dragon3.name + " " + dragon3.health + "," + onaga.name + " " + onaga.health);

attackDragon3(dragon3);
window.alert(dragon3.name + " " + dragon3.health + "," + onaga.name + " " + onaga.health);

if (dragon3.health<=0){
	delete dragon3.object;
	window.alert(onaga);
	onaga.objectEggs = "Platinum  Egg",
	window.alert(onaga.name + " has defeated the " + dragon3.name + " and received the Platinum  Egg!" + onaga.name +" now has " + onaga.object + "The end!");
};

if (onaga.health <= 0){
	console.log(dragon);
	window.alert(onaga.name +" has been defeated by the " + dragon3.name + "... GAME OVER");
};

// Reflection
// WOW! Learning! Okay, so after I thought I was finished with coding it,
//I then realize, I could have done EVERYTHING SO MUCH BETTER AND EASIER !  
// I do realize i repeat myself like a fool! And I altered my code so many times because I
// wanted to add interactivity, but it no longer worked the way I intended !
// I did add/edit/delete attributes,
//but I am fully aware of how this code looks to an experienced JS'er. Sorry!  
// hope I didn't scare your eyes! BUT I LEARNED and I am going to laugh at this code too, 
// when I get better ! ! 
// 
// ... I used references to integrate interactivity, which I did not intend on using,
// when I created my Pseuocode 