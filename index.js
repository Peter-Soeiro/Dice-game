
var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

var img1 = "dice" + dice1 + ".png";
var img2 = "dice" + dice2 + ".png";

document.querySelector(".dice1").src = "images/" + img1;
document.querySelector(".dice2").src = "images/" + img2;

if (dice1 > dice2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";

} else if (dice1 < dice2) {
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";

} else {
  document.querySelector("h1").textContent = "Draw!";

}
