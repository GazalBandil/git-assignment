const sqlBtn = document.getElementById('category1');
const linuxBtn = document.getElementById('category2');
const ReactBtn = document.getElementById('category3');
const codeBtn= document.getElementById('category4');
const djangoBtn = document.getElementById('category5');
const devopsBtn = document.getElementById('category6');


const easyBtn = document.getElementById('easy');
const mediumBtn = document.getElementById('medium');
const hardBtn = document.getElementById('hard');

const startBtn = document.getElementById('start');

const quizTitle = document.getElementById('quiz-title');



const API_BASE_URL = "https://quizapi.io/api/v1/questions?apiKey=HSdHquXqvWkchNWeyUN17HmO9PmGMrKjX2gQEMx5"; // api key
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let questionCategory = '';
let questionsDifficulty = '';
let timeRemaining = 15;



const categoryMap = {
    'SQL': 'sql',
    'Linux': 'linux',
    'React': 'react',
    'Code': 'code',
    'Django': 'django',
    'DevOps': 'devops'
};

//catergory selection logic
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {

        document.querySelectorAll(".category-btn").forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active"); 
        const selectedCategory = button.textContent.trim();
        questionCategory = categoryMap[selectedCategory] || selectedCategory.toLowerCase();
        if (quizTitle) {
            quizTitle.textContent = ` ${selectedCategory.toUpperCase()}`;
        }
        console.log("Selected Category:", questionCategory);
        
    });
});

//Difficulty Level Selection Logic
document.querySelectorAll('.level-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll(".level-btn").forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        questionsDifficulty = button.textContent.toLowerCase(); // Store difficulty
        console.log("Selected Difficulty:", questionsDifficulty);
    });
});


// Function to fetch questions
async function fetchQuestions(category, difficulty) {
    if (!category || !difficulty) {
        alert("Please select a category and difficulty level!");
        return;
    }

    try {
        const apiUrl = `${API_BASE_URL}&category=${category}&difficulty=${difficulty}&limit=15`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (!Array.isArray(data)) {
            throw new Error("Invalid API response format: Expected an array.");
        }

        // Formatting Questions
        questions = data.map(q => {
            let options = Object.values(q.answers).filter(ans => ans !== null);

            // Identify the correct answer(s)
            let correctAnswers = Object.entries(q.correct_answers)
                .filter(([key, value]) => value === "true") 
                .map(([key, _]) => key.replace("_correct", "")); 

            // Find the actual correct answer values
            let correctAnswerValues = correctAnswers.map(ansKey => q.answers[ansKey]); 
            let shuffledOptions = shuffleArray(options);
            return {
                question: q.question,
                options: shuffledOptions, 
                correctAnswers: correctAnswerValues 
            };
        });
        
        startGame(); // Start the quiz
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}

//function to shuffle the options
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// Start the quiz 
document.addEventListener("DOMContentLoaded", () => {
    const category = localStorage.getItem("selectedCategory");
    const difficulty = localStorage.getItem("selectedDifficulty");
    if (category && difficulty) {
        fetchQuestions(category, difficulty);
    } else {
        alert("No category or difficulty selected!");
    }
});

// quiz page Logic  
function startGame() {
    if (!questions || questions.length === 0) {
        document.getElementById("question-text").textContent = "No questions available.";
        return;
    }

    let currentQuestionIndex = 0;
    let score = 0;
    let timerInterval;

    showQuestion(questions[currentQuestionIndex]);


   //Display questions and options
    function showQuestion(questionObj) {
        const questionText = document.getElementById("question-text");
        const optionsContainer = document.getElementById("options-container");
        questionText.innerHTML = questionObj.question; 
        optionsContainer.innerHTML = ""; 

        // Display options
        questionObj.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            button.addEventListener("click", () => checkAnswer(option, questionObj.correctAnswers));
            optionsContainer.appendChild(button);
        });

        startTimer(questionObj);
        currentQuestion(currentQuestionIndex);
    }

   //Timer start
    function startTimer(questionObj) {
        clearInterval(timerInterval);

        const timerCircle = document.getElementById("timer-circle");
       
       
        let timeRemaining = 15;
        const circumference = 2 * Math.PI * 45;
        
        timerCircle.style.strokeDasharray = circumference;
        timerCircle.style.strokeDashoffset = '0';
        updateTimerDisplay(timeRemaining);

        timerInterval = setInterval(() => {
            timeRemaining--;
            updateTimerDisplay(timeRemaining);

            const progress = timeRemaining / 15;
            const offset = circumference * (1 - progress);
            timerCircle.style.strokeDashoffset = offset;
            timerCircle.style.stroke = timeRemaining > 10 ? "green" : timeRemaining > 5 ? "orange" : "red";

            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                autoSelectCorrectAnswer(questionObj);
            }
        }, 1000);
    }
    
    //ui update timer display
    function updateTimerDisplay(time) {
        document.getElementById("timer-text").textContent = ` ${time}s`;
    }

    //checking ans and adding it to score
    function checkAnswer(selected, correctAnswers) {
        clearInterval(timerInterval);
        const optionsContainer = document.getElementById("options-container");
        const optionButtons = optionsContainer.querySelectorAll(".option-btn");
        const scoreDisplay = document.getElementById("score");

        let isCorrect = correctAnswers.includes(selected);
        if (isCorrect) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
        }
        optionButtons.forEach(button => {
            button.disabled = true;
            if (correctAnswers.includes(button.textContent)) {
                button.style.backgroundColor = "green";
                button.style.color = "white";
            } else if (button.textContent === selected) {
                button.style.backgroundColor = "red";
                button.style.color = "white";
            }
        });

        setTimeout(() => moveToNextQuestion(), 2000);
    }
    //shoe all the reult ans
    function autoSelectCorrectAnswer(questionObj) {
        const optionsContainer = document.getElementById("options-container");
        const optionButtons = optionsContainer.querySelectorAll(".option-btn");

        optionButtons.forEach(button => {
            button.disabled = true;
            if (questionObj.correctAnswers.includes(button.textContent)) {
                button.style.backgroundColor = "green";
                button.style.color = "white";
            } else {
                button.style.backgroundColor = "red";
                button.style.color = "white";
            }
        });

        setTimeout(() => moveToNextQuestion(), 1000);
    }
    
    function currentQuestion(currentQuestionIndex){
        let totalQuestions = document.getElementById('current-question');
        totalQuestions.textContent = `${currentQuestionIndex + 1} /${questions.length}`;
    }

    function moveToNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showEndGameScreen(score);
        }
    }
    
    //end game screen
    function showEndGameScreen(finalScore) {
        const resultScreen = document.getElementById("result-screen");
        const finalScoreElement = document.getElementById("final-score");
        resultScreen.style.display = "block";
        finalScoreElement.innerHTML = `<p>Your Final Score: <strong>${finalScore}</strong></p>`;
        document.getElementById("play-again").addEventListener("click", () => {
            window.location.href = "main.html";
        });
    }
    
}

// to show quiz page
startBtn.addEventListener("click", () => {
    if (!questionCategory || !questionsDifficulty) {
        alert("Please select a category and difficulty level!");
        return;
    }
    localStorage.setItem("selectedCategory", questionCategory);
    localStorage.setItem("selectedDifficulty", questionsDifficulty);
    fetchQuestions(questionCategory, questionsDifficulty).then(() => {
        window.location.href = "quiz.html";
    });
});




