let boxes = document.querySelectorAll(".box");
let spans = document.querySelectorAll("span");

let playerTurn = "x",
    moves = 0,
    isGameOver = false;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        makeMove(box);
    });
});

function makeMove(box) {
    if (box.querySelector('span').innerText === "" && !isGameOver) {
        box.querySelector('span').innerText = playerTurn;
        moves++;
        if (checkWinner()) {
            gameOver();
        } else if (moves === 9) {
            draw();
        } else {
            playerTurn = playerTurn === "x" ? "o" : "x";
        }
    }
}

function checkWinner() {
    let winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let allBoxes = Array.from(boxes).map(box => box.querySelector('span').innerText);

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (allBoxes[a] !== "" && allBoxes[a] === allBoxes[b] && allBoxes[a] === allBoxes[c]) {
            return true;
        }
    }
    return false;
}

let restartButtonElement;

function gameOver() {
    isGameOver = true;
    const gameOverMessage = document.createElement("div");
    gameOverMessage.className = "text-center text-xl mt-5";
    gameOverMessage.textContent = `Player ${playerTurn.toUpperCase()} wins!`;
    document.body.appendChild(gameOverMessage);

    restartButtonElement = document.createElement("button");
    restartButtonElement.type = "button";
    restartButtonElement.id = "restart-button";
    restartButtonElement.className = "mx-auto block my-0 bg-white rounded-md p-3 text-center text-xl mt-5 restart-button";
    restartButtonElement.textContent = "Restart";
    document.body.appendChild(restartButtonElement);

    restartButtonElement.addEventListener("click", playAgain);
}

function draw() {
    isGameOver = true;
    const drawMessage = document.createElement("div");
    drawMessage.className = "text-center text-xl mt-5";
    drawMessage.textContent = "It's A Draw!";
    document.body.appendChild(drawMessage);

    restartButtonElement = document.createElement("button");
    restartButtonElement.type = "button";
    restartButtonElement.id = "restart-button";
    restartButtonElement.className = "block mx-auto my-0 bg-white rounded-md p-3 text-center text-xl mt-5 restart-button";
    restartButtonElement.textContent = "Restart";
    document.body.appendChild(restartButtonElement);

    restartButtonElement.addEventListener("click", playAgain);
}

function playAgain() {
    document.querySelectorAll(".text-center").forEach(element => element.remove());
    restartButtonElement.remove();
    boxes.forEach(box => box.querySelector('span').innerText = " ");
    playerTurn = "x";
    moves = 0;
    isGameOver = false;
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            makeMove(box);
        });
    });
}