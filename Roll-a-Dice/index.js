// script.js
const dice = document.getElementById("dice"); // Font Awesome dice icon
const rollBtn = document.getElementById("roll");
const saveBtn = document.getElementById("save");
const resetBtn = document.getElementById("reset");
const winnerText = document.getElementById("winner");

let currentPlayer = 1;
let scores = { 1: 0, 2: 0 };
let currentScores = { 1: 0, 2: 0 };

// Font Awesome dice classes mapping
const diceIcons = {
    1: "fa-dice-one",
    2: "fa-dice-two",
    3: "fa-dice-three",
    4: "fa-dice-four",
    5: "fa-dice-five",
    6: "fa-dice-six"
};


// Game started with timer

let gameStarted = false; // Ensure the game starts only when the button is clicked

document.getElementById("startTimerBtn").addEventListener("click", function () {
    // Reset and start the timer
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    updateTimerDisplay();

    gameStarted = true; // Enable dice rolling

    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        updateTimerDisplay();
    }, 1000);
});

// Function to update timer display
function updateTimerDisplay() {
    document.getElementById("timer").textContent = 
        (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
} 

//  rollDice function to check if the game has started
function rollDice() {
    if (!gameStarted) {
        alert("Edit The Players Names and Start the game first!");
        return;
    }

    dice.classList.add("rolling"); // Add animation class

    setTimeout(() => {
        let roll = Math.floor(Math.random() * 6) + 1;

        // Change the dice icon
        dice.className = `fas ${diceIcons[roll]} fa-5x`;

        if (roll === 1) {
            currentScores[currentPlayer] = 0;
            switchTurn();
        } else {
            currentScores[currentPlayer] += roll;      

            // Check if the current score reaches 100
            if (currentScores[currentPlayer] >= 100) {
                declareWinner();
                return;
            }
        }
        updateScores();
        dice.classList.remove("rolling"); // Remove animation class
    }, 500);
}



function saveScore() {
    scores[currentPlayer] += currentScores[currentPlayer];
    currentScores[currentPlayer] = 0;

    // Check if saved score reaches 100
    if (scores[currentPlayer] >= 100) {
        declareWinner();
        return;
    }

    switchTurn();
    updateScores();
}

//Switch turn

function switchTurn() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.getElementById("player1").classList.toggle("active");
    document.getElementById("player2").classList.toggle("active");
}


//Scores update
function updateScores() {
    document.getElementById("score1").textContent = scores[1];
    document.getElementById("score2").textContent = scores[2];
    document.getElementById("current1").textContent = currentScores[1];
    document.getElementById("current2").textContent = currentScores[2];
}


// Reset game function
function resetGame() {
    scores = { 1: 0, 2: 0 };
    currentScores = { 1: 0, 2: 0 };
    currentPlayer = 1;

    winnerText.textContent = ""; // Clear winner text
    enableButtons(); // Re-enable buttons
    updateScores(); // Update UI
    dice.className = "fas fa-dice-one fa-5x"; // Reset dice icon

    // Hide popups if they are visible
    document.getElementById("winnerPopup").classList.remove("show");

     // STOP TIMER
     clearInterval(timer);
     seconds = 0;
     minutes = 0;
     updateTimerDisplay(); 
}

// Function to disable buttons
function disableButtons() {
    rollBtn.disabled = true;
    saveBtn.disabled = true;
}

// Function to enable buttons
function enableButtons() {
    rollBtn.disabled = false;
    saveBtn.disabled = false;
}

// Function to declare winner
function declareWinner() {
    let winnerName = document.getElementById(`name${currentPlayer}`).value;
    document.getElementById("popupMessage").textContent = `🎉 Congratulations! ${winnerName} Wins! 🎉`;

    document.getElementById("winnerPopup").classList.add("show"); // Show popup
    disableButtons();
}

// Help button functionality
document.getElementById("helpBtn").addEventListener("click", function () {
    document.getElementById("helpPopup").style.display = "block";
});

document.getElementById("closeHelpBtn").addEventListener("click", function () {
    document.getElementById("helpPopup").style.display = "none";
});

window.onload = function () {
    document.getElementById("helpPopup").style.display = "block";
};

// Close popup and restart the game
document.getElementById("playAgain").addEventListener("click", function() {
    document.getElementById("winnerPopup").classList.remove("show");
    resetGame();
});


//name edit functionality
const name1Input = document.getElementById("name1");
const name2Input = document.getElementById("name2");
const startButton = document.getElementById("startTimerBtn");
const resetButton = document.getElementById("reset");

function disableNameEditing() {
    name1Input.disabled = true;
    name2Input.disabled = true;
}

function enableNameEditing() {
    name1Input.disabled = false;
    name2Input.disabled = false;
}

startButton.addEventListener("click", function () {
    disableNameEditing(); // Lock names when game starts
});

resetButton.addEventListener("click", function () {
    enableNameEditing(); // Allow name changes on reset
});




// Correctly add event listeners for buttons
rollBtn.addEventListener("click", rollDice);
saveBtn.addEventListener("click", saveScore);
resetBtn.addEventListener("click", resetGame);

