
console.log("Javascript Initialized.");

//		Set Variables

var lettersToGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var keyChars = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

var lettersYouGuessed = [];

console.log("Letters and Key Codes Arrays Declared.");

var chancesLeft = 10;

var winCount = 0;

var lossCount = 0;

console.log("Counters Declared.");

var Loop = 1;

var ran = Math.floor(Math.random() * lettersToGuess.length);

var comChoiceLETTER = lettersToGuess[ran];

var comChoiceKEYCHAR = keyChars[ran];

console.log("Basic Game Mechanics Declared.");

console.log("All Variables Set.");

//		Declaring Functions


function keyLogger() {
	console.log("Chances Left: " + chancesLeft);
	document.addEventListener("keyup", function(event) {
		var keyPressed = event.keyCode;
		var keyToIndex = keyChars.indexOf(keyPressed);
		var keyToLetter = lettersToGuess[keyToIndex];
		console.log("Key Pressed Charcode: " + keyPressed);
		console.log("Indexed from Keychars: " + keyToIndex);
		console.log("Letter Ref'd from Key Index: " + keyToLetter);
		if (keyPressed === comChoiceKEYCHAR) {
			winCount += 1;
			chancesLeft = 10;
			document.getElementById("guessesLeftid").innerHTML = chancesLeft;
			document.getElementById("winsCountid").innerHTML = winCount;
			document.getElementById("gameNews").innerHTML = "You won. Congratulations.";
			alert("You won. The correct answer was " + keyToLetter + ". Press OK to play again.");
			ran = Math.floor(Math.random() * lettersToGuess.length);
			comChoiceLETTER = lettersToGuess[ran];
			comChoiceKEYCHAR = keyChars[ran];
		}

		else if (keyPressed === 17) {
			console.log("Control key pressed.");
			Loop = 0;
			console.log("Loop Broken (Hopefully).");
			alert("Press the X button at the top right (Or red button at top left for Mac) to exit.");
		}

		else {
			console.log("Wrong Answer.");
			document.getElementById("gameNews").innerHTML = keyToLetter + " Isn't Correct.";
			chancesLeft -= 1;
			document.getElementById("guessesLeftid").innerHTML = chancesLeft;
			lettersYouGuessed.unshift(keyToLetter);
			document.getElementById("whatYouGuessedid").innerHTML = lettersYouGuessed;
			if (chancesLeft < 1) {
				lossCount += 1;
				document.getElementById("guessesLeftid").innerHTML = chancesLeft;
				document.getElementById("lossesCountid").innerHTML = lossCount;
				document.getElementById("gameNews").innerHTML = "You lost this one.";
				document.getElementById("whatYouGuessedid").innerHTML = "The Correct Answer: " + comChoiceLETTER;
				alert("You lost. The correct answer was " + comChoiceLETTER + ". To play again press OK.");
				chancesLeft = 10;
				lettersYouGuessed = [];
				ran = Math.floor(Math.random() * lettersToGuess.length);
				comChoiceLETTER = lettersToGuess[ran];
				comChoiceKEYCHAR = keyChars[ran];


			}
		}
	});
}

function startUp() {
	document.getElementById("guessesLeftid").innerHTML = chancesLeft;
	document.getElementById("lossesCountid").innerHTML = lossCount;
	document.getElementById("whatYouGuessedid").innerHTML = lettersYouGuessed;
	document.getElementById("winsCountid").innerHTML = winCount;
	document.getElementById("gameNews").innerHTML = "Game Started. Use the keyboard to guess. Just press a letter key, it's so simple a turkey sandwich could do it. MAKE SURE CAPS LOCK IS OFF or it will be counted as a wrong answer. USE LETTER KEYS, OTHERS ARE COUNTED AS WRONG ANSWERS";
//			!!Delete This!!
	console.log("Computer's Choice: " + comChoiceLETTER);
	keyLogger();
}

console.log("Functions Declared.");

//		Alert the User the Game Is About To Start
alert("The game is about to start. Press OK when you're ready to see if you're psychic. Press control key to exit.");

//		Start the Game and Keylogger
startUp();
console.log("Game Functions Started.");