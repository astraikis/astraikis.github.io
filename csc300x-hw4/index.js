const states = ["rock", "paper", "scissors"];
let currCPUImage = 0;
let throwInterval;

document.getElementById("rock").addEventListener("click", selectThrow);
document.getElementById("paper").addEventListener("click", selectThrow);
document.getElementById("scissors").addEventListener("click", selectThrow);
document.getElementById("throw-button").addEventListener("click", throwHand);
document.getElementById("reset-button").addEventListener("click", reset);

/**
 * Selects user throw.
 * @param {*} e Event automatically passed by the event listener.
 */
function selectThrow(e) {
    if (document.querySelector(".selected") !== null) {
        document.querySelector(".selected").classList.remove("selected");
    }
    e.target.classList.add("selected");
}

/**
 * Confirms user throw and initiates CPU throw.
 */
function throwHand() {
    if (document.querySelector(".selected") === null) {
        document.getElementById("throw-error").classList.remove("hidden");
        return;
    }

    document.getElementById("throw-error").classList.add("hidden");
    const cpuImage = document.getElementById("cpu-image");
    cpuImage.classList.remove("tie");
    cpuImage.classList.remove("win");
    cpuImage.classList.remove("lose");

    setTimeout(showCPUThrow, 3000);
    throwInterval = setInterval(switchCPUImage, 500)
}

/**
 * Randomly decides CPU throw and displays the results.
 */
function showCPUThrow() {
    clearInterval(throwInterval);
    const cpuThrow =  Math.floor(Math.random() * 3);
    document.getElementById("cpu-image").src = "./images/" + states[cpuThrow] + ".PNG";

    const resultsText = document.getElementById("results-text");
    const userThrow = document.querySelector(".selected").id;
    if (userThrow === "rock") {
        if (cpuThrow === 0) {
            resultsText.innerText = "Tie!";
            const cpuImage = document.getElementById("cpu-image")
            cpuImage.classList.add("tie");
            cpuImage.classList.remove("win");
            cpuImage.classList.remove("lose");
        } else if (cpuThrow === 1) {
            resultsText.innerText = "You lose.";
            document.getElementById("cpu-image").classList.add("lose");
        } else {
            resultsText.innerText = "You win!";
            document.getElementById("cpu-image").classList.add("win");
        }
    } else if (userThrow === "paper") {
        if (cpuThrow === 0) {
            resultsText.innerText = "You win!";
            document.getElementById("cpu-image").classList.add("win");
        } else if (cpuThrow === 1) {
            resultsText.innerText = "Tie!";
            const cpuImage = document.getElementById("cpu-image")
            cpuImage.classList.add("tie");
            cpuImage.classList.remove("win");
            cpuImage.classList.remove("lose");
        } else {
            resultsText.innerText = "You lose.";
            document.getElementById("cpu-image").classList.add("lose");
        }
    } else {
        if (cpuThrow === 0) {
            resultsText.innerText = "You lose.";
            document.getElementById("cpu-image").classList.add("lose");
        } else if (cpuThrow === 1) {
            resultsText.innerText = "You win!";
            document.getElementById("cpu-image").classList.add("win");
        } else {
            resultsText.innerText = "Tie!";
            const cpuImage = document.getElementById("cpu-image")
            cpuImage.classList.add("tie");
            cpuImage.classList.remove("win");
            cpuImage.classList.remove("lose");
        }
    }
}

/**
 * Sets CPU image based on currCPUImage.
 */
function switchCPUImage() {
    document.getElementById("cpu-image").src = "./images/" + states[currCPUImage % 3] + ".PNG";
    currCPUImage++;
}

/**
 * Resets site back to original state.
 */
function reset() {
    if (document.querySelector(".selected") === null) {
        return;
    }
    document.querySelector(".selected").classList.remove("selected");

    const cpuImage = document.getElementById("cpu-image");
    cpuImage.src = "./images/question-mark.PNG";
    cpuImage.classList.remove("tie");
    cpuImage.classList.remove("win");
    cpuImage.classList.remove("lose");

    const resultsText = document.getElementById("results-text");
    resultsText.innerText = "";
}