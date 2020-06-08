function diceGame() {
  var numberGenerator1 = Math.floor(Math.random() * 6) + 1;
  var numberGenerator2 = Math.floor(Math.random() * 6) + 1;
  var heading = document.querySelector("h1");
  function dicePlayer1() {
    var playerOne = document.getElementsByClassName("player-1-image")[0];
    if (numberGenerator1 === 1) {
      playerOne.src = "images/dice1.png";
    } else if (numberGenerator1 === 2) {
      playerOne.src = "images/dice2.png";
    } else if (numberGenerator1 === 3) {
      playerOne.src = "images/dice3.png";
    } else if (numberGenerator1 === 4) {
      playerOne.src = "images/dice4.png";
    } else if (numberGenerator1 === 5) {
      playerOne.src = "images/dice5.png";
    } else {
      playerOne.src = "images/dice6.png";
    }

    return numberGenerator1;
  }

  function dicePlayer2() {
    numberGenerator2;
    var playerTwo = document.getElementsByClassName("player-2-image")[0];
    if (numberGenerator2 == 1) {
      playerTwo.src = "images/dice1.png";
    } else if (numberGenerator2 === 2) {
      playerTwo.src = "images/dice2.png";
    } else if (numberGenerator2 === 3) {
      playerTwo.src = "images/dice3.png";
    } else if (numberGenerator2 === 4) {
      playerTwo.src = "images/dice4.png";
    } else if (numberGenerator2 === 5) {
      playerTwo.src = "images/dice5.png";
    } else {
      playerTwo.src = "images/dice6.png";
    }
    return numberGenerator2;
  }

  dicePlayer1();
  dicePlayer2();

  if (dicePlayer1() > dicePlayer2()) {
    heading.textContent = ("Player 1 Wins!");
  } else if (dicePlayer1() < dicePlayer2()) {
    heading.textContent = ("Player 2 Wins!");
  } else {
    heading.textContent = ("Draw!");
  }

}
