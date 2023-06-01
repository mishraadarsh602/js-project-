randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
let guessField = document.body.querySelector('.guessField');

let guessSubmit = document.body.querySelector('.guessSubmit');

let guesses = document.body.querySelector('.guesses');
let guessesDiv = document.body.querySelector('.guesses-div');

let lastResult = document.body.querySelector('.lastResult');

let lowOrHigh = document.body.querySelector('.lowOrHi');

let chances = document.body.querySelector('.chances');

let playAgain = document.getElementById("play-again");
guessSubmit.addEventListener("click", validNumber);
guessesDiv.style.display = "none";

let  loose = new Audio("sound/loose.mp3");
let  won = new Audio("sound/won.mp3")
let  invalid = new Audio("sound/invalid.mp3")
let  move = new Audio("sound/move.mp3")


function validNumber(){
  if(guessField.value>0 && guessField.value<100){
    checkGuess();
  }
   else{
    invalid.play();
    alert("Please enter  valid number between 1 -100 ");
   }
  //alert(guessField);
}
//console.log(randomNumber);
let count = 1;
chances.value = 10;
function checkGuess() {
  guessesDiv.style.display = "block";

  count++;
  chances.value--;
  if (guessField.value == "") {
    guessField.value = 0;
  }
  let userGuess = guessField.value;
  console.log(userGuess);
  guessField.value = "";
  if (randomNumber == userGuess) {
    lastResult.textContent = "You won!!";
    lastResult.style.color = "green";
    lowOrHigh.textContent = "";
    won.play();

    guesses.textContent = '';
    var button = document.createElement("button");
    playAgain.appendChild(button);

    button.classList.add("btn", "m-auto");
    button.textContent = "Play Again";

    //playAgain.button.style.display="inline-block";

    let arr = [guessSubmit, guessField, guessesDiv];
    arr.forEach((x) => {
      x.style.display = "none";

    });
  } else if (count > 10) {

    lastResult.textContent = "You loose!! You have exceeded the limit";
    lowOrHigh.textContent = "";
    lastResult.style.color = "red";
    guesses.textContent = '';
    var button = document.createElement("button");
    loose.play();
    playAgain.appendChild(button);
    button.textContent = "Play Again";
    let arr = [guessSubmit, guessField, guessesDiv];
    arr.forEach((x) => {
      x.style.display = "none";

    });


    button.classList.add("btn", "m-auto");
    //playAgain.style.display="inline-block";

      
  }
  else if (userGuess > randomNumber) {
    lowOrHigh.textContent = "Your Number is too high!!";
    move.play();
    // guesses+=userGuess;
    guesses.textContent += ' ' + userGuess;

    // console.log(guessField.value);

  }
  else {
    lowOrHigh.textContent = "Your Number is too low!!";
    move.play();

    // guesses+=userGuess;
    guesses.textContent += ' ' + userGuess;
    // guesses+=guessField.value;
    //console.log(guessField.value);

  }

  //guessField='';

  //function for clear and start again
  button.addEventListener("click", reset);
  chances.value = 10;
  function reset() {
    //alert(guessField.value);
    //guessField='';
    guessField.value = "";
    lastResult.textContent = "";
    lowOrHigh.textContent = "";
    guessSubmit.style.display = "inline-block";
    guessField.value = "";
    count = 1;
    chances.value = 10;
    button.remove();
    guessField.style.display = "inline-block";



  }




}



//loader starts js 

(function () {
  var myDiv = document.getElementById("loader"),
    show = function () {
      myDiv.style.display = "block";
      setTimeout(hide, 3000); // 5 seconds

      // setTimeout(playSound,4000);

    },

    hide = function () {
      myDiv.style.display = "none";

    };

  show();
})();
// loader end js



setTimeout(playSound, 3000);
function playSound() {
  //let audio = new Audio("sound/start.mp3");
  audio.loop = true;
  audio.play();
}
//playSound("sound/start.mp3",true);



