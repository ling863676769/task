var randomNumber=Math.floor(Math.random()*101) ;
console.log(randomNumber);


var guesses = document.querySelector('.guesses');
// console.log(guesses);

var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
// console.log(guessField);
// console.log(guessField.type);
var guessCount = 1;//设置猜测的次数为一
var resetButton;
guessField.focus();//获得焦点

function checkGuess(){
//    document.write('好好好');
var userGuess = Number(guessField.value);
if(guessCount === 1){
    guesses.textContent = '上次猜的数: ';
}
//将用户输入的猜数接入猜数历史中，并用空格隔开
guesses.textContent += userGuess + ' ';

//判断是否猜中
if(userGuess === randomNumber) {
  // 猜中
  //在结果HTML元素中置入恭喜信息
  lastResult.textContent = '恭喜你！猜对了！';
  // 将猜数结果元素背景色设置为绿色
  lastResult.style.backgroundColor = 'green';
  //清空高低提示字符串
  lowOrHi.textContent = '';
  //调用游戏结束函数
  setGameOver();
} else if(guessCount === 10) {
  //第10次都没猜中
  //提示游戏结束
  lastResult.textContent = '!!!GAME OVER!!!';
  //清空高低提示字符串
  lowOrHi.textContent = '';
  // 调用游戏结束函数
  setGameOver();
} else {
  //10次之内没猜中
  //提示猜错信息
  lastResult.textContent = '你猜错了！';
  //修改提示背景色
  lastResult.style.backgroundColor = 'red';
  //判断小了还是大了
  if(userGuess < randomNumber) {
    //小了提示
    lowOrHi.textContent = '刚才你猜低了！';
  } else if(userGuess > randomNumber) {
    //大了提示
    lowOrHi.textContent = '刚才你猜高了！';
  }
}
//猜数自增
guessCount++;
//清空文字区  
guessField.value = '';
//文字输入区获得焦点
guessField.focus();
}
//确定按钮设置单击事件
guessSubmit.addEventListener('click', checkGuess);
// 按钮单击事件函数
function setGameOver() {
    
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '开始新游戏';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
//重置游戏
function resetGame() {
  guessCount = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
// checkGuess();
// guessSubmit.addEventListener('click,checkGuess');
