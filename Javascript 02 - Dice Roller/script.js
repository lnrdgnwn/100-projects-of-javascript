function getDiceFace(randomize) {
    switch (randomize) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
    }
}

let firstHTML = document.getElementById('dice').innerHTML;
let firstP = document.querySelector('form p').innerHTML;
let rollDiceButton = document.getElementById('rollDice');
let diceElement = document.getElementById('dice');

function rollDice() {
    let selectedCount = parseInt(document.getElementById('num').value);
    document.querySelector('form p').innerHTML = "You rolled " + selectedCount + " dice:";
    let diceFaces = "";

    for (let i = 1; i <= selectedCount; i++) {
        let randomize = Math.floor(Math.random() * 6) + 1;
        let diceFace = getDiceFace(randomize);
        diceFaces += diceFace;
    }

    diceElement.innerHTML = diceFaces;
    diceElement.style.fontSize = '70px';
    diceElement.style.margin = '0';
    rollDiceButton.value = "Roll Again";
}

if (rollDiceButton) {
    rollDiceButton.addEventListener('click', rollDice);
}

document.querySelector('form').addEventListener('reset', function () {
    document.getElementById('dice').innerHTML = firstHTML;
    diceElement.style.fontSize = '24px';
    document.querySelector('form p').innerHTML = firstP;
    if (rollDiceButton) {
        rollDiceButton.value = "Roll Dice";
    }
});