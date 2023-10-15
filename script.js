'use strict';
////selecting element
const input = document.querySelector('.input');
const inputView = document.querySelector('.input-view');
const summitBtn = document.querySelector('.summit-btn');
const status = document.querySelector('.status');
const times = document.querySelector('.times');
const highscore = document.querySelector('.highscore');
const btnAgain = document.querySelector('.btn-again');

/////////function
const updateLiveStatus = (message, inputNum, timesNum, Again = false) => {
  //Again is refer to if press Again btn
  Again ? (inputView.textContent = '?') : (inputView.textContent = inputNum);
  Again ? (document.body.style.backgroundColor = '#bfbcc28e') : '';
  Again ? (status.textContent = message) : (input.value = '');
  Again ? (highscore.textContent = 0) : (status.textContent = message);
  times.textContent = timesNum;
};

///////////////needed vaiable aur random number
let inputNum;
let timesNum = 20;
const hiddenNumber = Number.parseInt(Math.random() * 20 + 1);
console.log(hiddenNumber, input);

///////////event handler
summitBtn.addEventListener('click', e => {
  e.preventDefault();
  inputNum = input.value * 1;

  if (timesNum > 0) {
    timesNum -= 1;

    // //to low logic
    if (hiddenNumber > inputNum) {
      updateLiveStatus('📉 To low', inputNum, timesNum);
    }

    ////to high logic
    if (hiddenNumber < inputNum) {
      updateLiveStatus('📈 To high', inputNum, timesNum);
    }

    ////win logic
    if (hiddenNumber === inputNum) {
      document.body.style.backgroundColor = '#ffa94d';
      highscore.textContent = timesNum;
      timesNum = 0;
      updateLiveStatus('🎉You win game🎇', inputNum, timesNum);
    }
  }
});

////again btn handler
btnAgain.addEventListener('click', e => {
  timesNum = 20;
  updateLiveStatus('Start guessing..........', inputNum, timesNum, true);
});
