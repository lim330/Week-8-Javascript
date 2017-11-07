/* Create a "psychic duck" that gives out a random reply from a list of 
preset replies in an array, while changing expressions. Steps are numbered. 
*/

// -- 1
// Create variables. 
var replies = ["Yes", "No", "How should I know?", "Feed me and then I'll tell you.", "Maaaaybe."]; // list of replies, order must correspond with the right sound file
var sounds = ["yes", "no", "how", "feedme", "maybe"]; // name of sound files
var eyes = ["eyes", "eyes2", "eyes3", "eyes4", "eyes5", "eyes", "eyes7" ]; // name of image files for eyes
var randomNum = 0; // this variable will hold the current randomized number to pull from the replies array
var randomEyes = 0; // variable that holds random number to pull a new eye expression, separate variable because the amount of eyes exceed the amount of replies
var audioElement;

// create function to play sound based off of random variable being passed
function playSounds(r) {

//YOUR CODE HERE
 	audioElement.setAttribute('src', 'assets/sound/'+sounds[r]+'.mp3');
    audioElement.play();

}

// create a function that returns a random number within the limits of the array length. 
// function passes name of the array, so we can use one function for different arrays with different lengths
function randomNumGenerator(arrayName) { // create random number for random reply

//YOUR CODE HERE
	return Math.floor(Math.random()*arrayName.length);
}

// -- Create a function to bring the duck to life.
function answerQuestion () {

//YOUR CODE HERE
	randomNum=randomNumGenerator(replies);
	randomEyes=randomNumGenerator(eyes);
	var eye="assets/img/"+ eyes[randomEyes]+".png";
	$("#speech").text(replies[randomNum]);
	$("#question").val('');
	$("#eyes").css({"background":"url('"+eye+"') no-repeat","background-size":"100% auto"});
	playSounds(randomNum);
}

// -- step 3
// init function will initialize the rest of the functions
function init() {
	console.log('Hello World'); // check to see if script is linked properly and running

//YOUR CODE HERE
	audioElement = document.createElement('audio');
}

// -- step 2
// wait until dom is loaded then run init function
$(document).ready(function(){
	init();
}); 

$("#submit").click(answerQuestion);