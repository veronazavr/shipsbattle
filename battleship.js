var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Привет, пупсики! Это морской бой. в 7 ячейках ••••••• (от 0 до 6) расположен 3 палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 0-6):");
     if (guess < 0 || guess > 6) {
 alert("чёт не то нажали");
 } else {
 guesses = guesses + 1;
 
 if (guess == location1 || guess == location2 || guess == location3) {
  alert("попал!");
  hits = hits + 1;
  if (hits == 3) {
  isSunk = true;
  alert("потопил вражеский корабль!");
  }
  } else {
  alert("плохой выстрел");
  }
  }
 }
 var stats = "У тебя получилось " + guesses + " попыток, " +
  "точность равна " + (3/guesses);
 alert(stats);