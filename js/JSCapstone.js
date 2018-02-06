// global variables

var words = ['hearts', 'circuitry', 'deceit', 'addictive', 'rude'];
var uScores = [];
var correctLetter = [];
var wrongLetter = [];
var wordSelected = [];
var numberOfGuesses = 7;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// gets the word to be guessed

var choosenWord = words[Math.floor(Math.random() * words.length)];
console.log(choosenWord);

// changes html

var wordToGuess = document.getElementById('word');
var correctLetterArray = document.getElementById('correct');
var wrongLetterArray = document.getElementById('wrong');
var guessCounter = document.getElementById('counter');
var resetButton = document.getElementById('reset');

//generates the underscores based on the amount of letters

var uScoreFun = function() {
  for (var i = 0; i < choosenWord.length; i++) {
    uScores.push('_');
    wordToGuess.innerHTML = uScores.join('  ');
  }
  return uScores;
};

console.log(uScoreFun());

//gets the users letter guess
guessCounter.innerHTML = numberOfGuesses;

var reset = () => {
  window.location.reload();
};

document.addEventListener('keypress', function(event) {
  var code = event.charCode;
  var letterFromCode = String.fromCharCode(code);
  var checkWord = choosenWord.indexOf(letterFromCode);
  if (checkWord > -1) {
    for (var i = 0; i < choosenWord.length; i++) {
      if (choosenWord[i] === letterFromCode) {
        uScores[i] = letterFromCode;
        correctLetter.push(letterFromCode);
        uScores[checkWord] = letterFromCode;
        wordToGuess.innerHTML = uScores.join('  ');
        correctLetterArray.innerHTML = correctLetter.join(' ');
        if (uScores.join('') == choosenWord) {
          alert('you won! The word is: ' + choosenWord);
          reset();
        }
      }
    }
  } else {
    if (letterFromCode > 1 || alphabet.indexOf(letterFromCode) === -1) {
      alert('enter a letter');
    } else if (letterFromCode === 0 || letterFromCode > 1 || wrongLetter.indexOf(letterFromCode) === -1) {
      wrongLetter.push(letterFromCode);
      wrongLetterArray.innerHTML = wrongLetter.join(' ');
      numberOfGuesses--;
      var counterLoss = guessCounter.innerHTML = numberOfGuesses;
      if (counterLoss === 0) {
        alert('You loss! The word was: ' + choosenWord);
        reset();
      }
    }
  }
});
