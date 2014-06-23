// My role in the group is: Translate user stories into pseudocode

// Here is my part of the challenge:

// Function sum arrayVariables
//		Return summation by evalualting arrayVariables, and joining all with '+'
//		
//		
// Function mean arrayVariables	
//   	Return arraySum divided variables.length (to get the mean or avg.)
//		
//
// Function median arrayVariables
//
//		set a variable half =  rounding arrayVariables.length/2 (to get the result we would want);
//
//		If arrayVariables.length % 2
//			Return arrayVariables half (so we can get our number from an even array)
//		else
//			Return arrayVariables half-1 + arrayVariables half / 2.0 (so we can get our number from an odd array)
//		



// This experience was challenging! 
// I had a hard time with it. Letting go of control and thinking of the 
// possibilities, without sight of the beginning or the end of the project.
// My part was the pseudo code, which I found difficult. It is hard to see 
// how someone else will interpret it…. but it was also my first time pseudo
// coding for another person to see. I wasn't sure of what was acceptable 
// to write and what wasn’t. I actually wanted to code while I was pseudo’ing
// because I knew one aspect that another person wasn't going to see. I was also 
// unsure if I was able to ask questions to the person before me. 
// Our group did not pass all the tests the first time. We passed the 
// first few, but there may have been miscommunication or missed syntax. 

// THIS IS COPIED FROM JESSICA'S PAGE------------------------------------------------------------------------------------------------------
// My role in the group is: Refactor and translate to user stories

// Here is my part of the challenge:


// Faraaz's Code
var sum = function (arrayVariables)
 {
	var sum = 0; // initializing sum as 0
	for ( i in arrayVariables)
	{
		sum = sum + arrayVariables[i];
	}
	return sum;
}

// My Code
var sum = function(arrayVariables) {
	var sum = 0; 
	for (num in arrayVariables) {
		sum += arrayVariables[num];			// changed to +=
	}
	return sum;
}



// ===============================================

// Faraaz's Code
var mean = function (sum, arrayVariables) 
{
	var mean = sum / (arrayVariables.length);
	return mean;
}

// My Code
var mean = function (arrayVariables) {
	arraySum = sum(arrayVariables);			// added sum() to body so you don't have to run it beforehand
	var mean = arraySum / (arrayVariables.length);
	return mean;
}




// ===============================================

// Faraaz's Code
var median = function (arrayVariables) 
{
	var half = arrayVariables.length/2;

	if (arrayVariables.length % 2)
	{
		return arrayVariables[half];
	}
	else
	{
		return arrayVariables[half-1];
	}
}

// My Code v1 -- this does NOT return the mathmatical median of a given array
var median = function(arrayVariables) {
	var halfLength = arrayVariables.length / 2;	// renamed half to halfLength
	if (arrayVariables.length % 2 === 0) { 		// added ===0 to create boolean
		return arrayVariables[halfLength]; 
	}
	else {
		return arrayVariables[halfLength - .5]; 
	}
}

// My Code v2 -- should return the mathmatical median of a given array
var median = function(arrayVariables) {
	arrayVariables = arrayVariables.sort();			
	var halfLength = arrayVariables.length / 2;
	if (arrayVariables.length % 2 === 0) { 	
		return (arrayVariables[halfLength] + arrayVariables[halfLength - 1]) / 2;						
	}
	else {
		return arrayVariables[halfLength - .5]; 
	}
}


// ===============================================
// ===============================================

// User Stories:

// I want to take a bunch of numbers and add them all together and see what the total is.

// I want to take a bunch of numbers and find out what the average is of all those numbers.

// v1: I want to take a list of numbers and find out which number is located in the middle-ish of the list.

// v2: I want to take a bunch of numbers and find out what the median is


// ===============================================
// ===============================================

// Reflect:

// What was this experience like?
// It was a bit nerve-wracking, waiting for other people to get me the code, and then because I got it on the weekend, not really being able to ask what was expected of me once I realized that one of the functions didn't work.
// Was your group successful in passing the tests?
// What did you learn about writing user stories, pseudocoding, writing code, refactoring, etc.?
// It's super important to get each step right the first time around or everything down the chain is wrong as well!

// What parts of your strategy worked? What problems did you face?
// What questions did you have while coding? What resources did you find to help you answer them?
// How DO you get the median of a list of numbers? -Google. What should I do with this broken code? -still not sure what the answer is there. Should I call sum() inside the body of mean() so that I don't have to run sum() beforehand, and if so should I call it or just copy/paste the math? -boyfriend suggested that it's better to call the function than copy/paste its algorithm.
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// It took me a long time to work out each bit of logic for the code, because math makes me nervous and it was more complicated than I expected.
// Did you learn any new skills or tricks? How confident are you with each of the Learning Competencies?
// I feel more comfortable with JS functions & if/else statements and their syntax now, though I still want more practice
// Which parts of the challenge did you enjoy?
// I liked learning about Hungarian Notation and other refactoring suggestions in the readings
// Which parts of the challenge did you find tedious?
// Trying to write out the new function without the tests! I think TDD seems super duper useful.

