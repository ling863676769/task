var randomNumber=Math.floor(Math.random()*101) ;
// console.log(randomNumber);



var guessField=document.querySelector('.guessField');
console.log(guessField);
// console.log(guessField.type);
var guesses = document.querySelector('.guesses')
console.log(guesses);
var lastResult=document.querySelector('.lastResult');
var lowOrHi=document.querySelector('.lowOrHi');
var guessSubmit=document.querySelector('.guessSubmit');

var guessCoutn=1;//设置猜测的次数为一
var resetButton;
guessField.focus();//获得焦点

function checkGuess(){
//    document.write('好好好');
guesses.textContent +=guessField.value+" ";
guesses.style.backgroundColor="red";
}
// checkGuess();