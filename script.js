'use strict';

/*
console.log(
  (document.querySelector('.message').textContent = 'You are a winner')
);

console.log((document.querySelector('.score').textContent = 10));
console.log(
  (document.querySelector('h1').textContent = 'What is my secret number?')
);
console.log((document.querySelector('.again').textContent = 'Play Again!'));

console.log((document.querySelector('.guess').value = 15));

*/

//Conditions
//1. when there is no input
//2. when the player wins
//3. when the guess is too high
//4. when the guess is too low
//

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//function code to set the message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Condition 1 ( when there is no guess)

  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No number input';
    displayMessage('🚫 No number input');

    //Condition 2 (when a player wins)
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🏆 You won the game!';
    displayMessage('🏆 You won the game!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#097988';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Number is too high!📈' : 'Number is too low 📉';

      displayMessage(
        guess > secretNumber ? 'Number is too high!📈' : 'Number is too low 📉'
      );
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent =
      // 'You just lost the game! 😭👎';

      displayMessage('You just lost the game! 😭👎');
      document.querySelector('.score').textContent = 0;
    }
    //     //Condition 3 ( when the guess is above the secret number)
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Number is too high!📈';
    //       --score;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent =
    //         'You just lost the game! 😭👎';
    //       document.querySelector('.score').textContent = 0;
    //     }

    //     //Condition 4 ( when the guess is too low)
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Number is too low 📉';
    //       --score;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent =
    //         'You just lost the game! 😭👎';
    //       document.querySelector('.score').textContent = 0;
    //     }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
  //is it better to use 'null' or and empty string " " to reset the input field
});
