"use strict";
/* Math.random()*2 produce number bw 0 and 2 */
let secNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

/*queryselector is method or function present in document object */

//  textContent property applied on element to read the text
// console.log(document.querySelector(".message").textContent);

// // here we assgin a new value to that content by use of =
// document.querySelector('.message').textContent = 'correct Number!';
// console.log(typeof (document.querySelector(".number").textContent = 13));
// document.querySelector('.score').textContent = 20;

// document.querySelector(".guess").value;
// console.log(document.querySelector(".guess").value);

// *********handling click events ********
// here with the use of addEventListener method we firstly add event which is click in this case
// than function which is event handler perform the outcom of click event
document.querySelector(".check").addEventListener("click", function () {
  /*here value from guess class is string because it came from input tag which always give text */
  const guess = Number(
    document.querySelector(".guess").value
  ); /*type of guess is string so we use number function to convert it into number */
  //   console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "NO Number";
  } else if (guess == secNum) {
    document.querySelector(".message").textContent = "Correct Number Congo! ";
    /* here js accept camelCase  while writing style properties like (it understand backgroundColor ,not background-color*/
    document.querySelector("body").style.backgroundColor =
      "#60b347"; /*here we use = to assign value ,not colon(:) and always use string to assign the value*/
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secNum;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "guess is too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "you lost the game ,try again!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "guess is too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "you lost the game ,try again!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
