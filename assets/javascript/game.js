// Global VAR

var wins = 0;
var losses = 0;
var guessesLeft = 7;
var soFar = [];
var randomLetter = [];

var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// initiates the randomLetter
function gameStart() {
  random = letters[Math.floor(Math.random() * letters.length)];
  randomLetter = random.toLowerCase();
  guessesLeft = 7;
  soFar = [];
  console.log(randomLetter);
}

// captures the typed letter and compars it to the random letter
document.onkeyup = function(l) {
  var typedLetter = l.key.toLowerCase();
  console.log(typedLetter);
  soFar.push(typedLetter);

  if (randomLetter == typedLetter) {
    right();
  } else {
    wrong();
  }
};

// if the typed letter is wrong, this function will execute
function wrong() {
  guessesLeft--;
  document.getElementById("soFar").innerHTML = soFar;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  if (guessesLeft == 0) {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    gameStart();
  }
}

// if the typed letter is right, the function will execute
function right() {
  wins++;
  document.getElementById("wins").innerHTML = wins;
  gameStart();
}

gameStart();

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
