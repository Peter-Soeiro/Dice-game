
// generates two random numbers between 1 and 6
var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

// get the path to an image based in the random number
var img1 = "images/dice" + dice1 + ".png";
var img2 = "images/dice" + dice2 + ".png";

// change the  path to the random image
document.querySelector(".dice1").src = img1;
document.querySelector(".dice2").src = img2;

// change the h1 to show who won
if (dice1 > dice2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if (dice1 < dice2) {
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").textContent = "Draw!";
}
