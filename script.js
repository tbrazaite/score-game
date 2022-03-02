"use strict"

var playerOneButton = document.getElementById("playerOne");
var playerTwoButton = document.getElementById("playerTwo");
var resetButton = document.getElementById("reset");
var inputValue = document.getElementById("inputValue");
var maxNumber = document.getElementById("maxNumber");
var player1number = document.getElementById("player1");
var player2number = document.getElementById("player2");

var komentaras = document.getElementById("komentaras");
var img = document.getElementById("img");

// Pradzioj
var number1 = 0;
var number2 = 0;
var number3 = 0;

player1number.innerText = number1;
player2number.innerText = number2;
maxNumber.innerText = number3;

playerOneButton.addEventListener("click", function () {
    if (true) {
        number1++;
        player1number.innerText = number1;
        if (number1 === number3) {
            player1number.style.color = "green";
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;
            komentaras.style.opacity = "1";
        }
    }
});

playerTwoButton.addEventListener("click", function () {
    if (true) {
        number2++;
        player2number.innerText = number2;
        if (number2 === number3) {
            player2number.style.color = "red";
            playerTwoButton.disabled = true;
            playerOneButton.disabled = true;
            komentaras.style.opacity = "1";
        }
    }
});

inputValue.addEventListener("change", function () {
    number3 = Number(this.value);
    maxNumber.innerText = number3;
});

resetButton.addEventListener("click", function () {
    number1 = 0;
    number2 = 0;
    number3 = 0;

    player1number.innerText = number1;
    player2number.innerText = number2;
    maxNumber.innerText = number3;
    inputValue.value = '';

    player1number.style.color = "white";
    player2number.style.color = "white";
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    komentaras.style.opacity = "0";
    img.style.opacity = "0";
});

document.getElementById("inputValue").oninput = function () {
    var max = parseInt(this.max);
    if (parseInt(this.value) > max) {
        this.value = max;
    }
}

komentaras.addEventListener("click", function () {
    img.style.opacity = "1";
});







