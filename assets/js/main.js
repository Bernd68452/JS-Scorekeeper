let p1But = document.querySelector("button#p1But");
let p2But = document.querySelector("button#p2But");
let resetBut = document.querySelector("button#reset");
let p1Display = document.querySelector("span#p1Score");
let p2Display = document.querySelector("span#p2Score");
let pointsNeeded = document.querySelector("span#pointsNeeded");
let numInput = document.querySelector("input");

let p1Score = 0, p2Score = 0;
let winPoints = +numInput.value;
let gameOver = false;

p1But.addEventListener("click", function () {
    if (!gameOver) {
        if (p1Score < winPoints) {
            p1Score++;
            p1Display.textContent = p1Score;
            if (p1Score === winPoints) {
                p1Display.classList.add("winner");
                document.querySelector("p#winner").textContent = "Spieler 1 gewinnt!"
                gameOver = true;
            }
        }
    }
});
p2But.addEventListener("click", function () {
    if (!gameOver) {
        if (p2Score < winPoints) {
            p2Score++;
            p2Display.textContent = p2Score;
            if (p2Score === winPoints) {
                p2Display.classList.add("winner");
                document.querySelector("p#winner").textContent = "Spieler 2 gewinnt!"
                gameOver = true;
            }
        }
    }
});

resetBut.addEventListener("click", reset);
numInput.addEventListener("input", function () {
    winPoints = +numInput.value;
    pointsNeeded.textContent = winPoints;
    reset();
});


function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    document.querySelector("p#winner").textContent = "";
}