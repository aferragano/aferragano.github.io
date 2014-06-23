// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Anthony Ferragano
//  2.Mack MacLean


// 0. "YOU SIGNED... WHO?!"

// person with attributes of name ag and quote


// 1. "Here they Come!"

var adamSandler = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home!"
};

var kristenBell = {
  name: "Kristin Bell",
  age: 33,
  quote: "Do you want to build a snowman?"
};

var jimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "...So you're telling me there's a chance? YEAH!"
};




// 2. "TIME IS MONEY!"

function Client(age,name,quote) {
	this.name = age,
	this.age = name,
	this.quote = quote
};

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"
var clientsList = [adamSandler, kristenBell, jimCarrey]
clientsList.push(shooterMcGavin);

function displayinfo () {
	for (i = 0; i < clientsList.length; i++)
    console.log ("The client's name is " + clientsList[i].name + ", and is " + clientsList[i].age + " years old. Their quote is '"+ clientsList[i].quote+ "'")
}

console.log (displayinfo(clientsList));



// 4. "But wait, there's more!"


function showQuote() { for (i = 0; i < clientsList.length; i++)
    console.log ("This person's famous quote is '"+ clientsList[i].quote+ "'")
}


showQuote()

// 5.  ** BONUS **
// not advanced enough for this at this time, but will figure it out soon.

//  6.  Your Reflection:
This was a difficult challenge. I wish we had more time in the GPS to 
accomplish the objectives with the guidance of the instructor. 
There was a lot of sidetracking during the session, which may have been 
necessary but maybe too extensive. I would have liked to continue working
right after the hour session with my partner... or maybe after a short break,
however, he had previous engagements. We were not able to pair online together
again after the GPS session, which was detrimental to both of our experiences. 
I used quite a few resources to get through the challenge on my own. 
I feel very accomplished that I was able to complete this to the best of my
ability. (I hope I did everything correctly.)
 








