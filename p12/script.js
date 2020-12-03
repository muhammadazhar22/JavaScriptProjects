// Settings DOM Elements
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const settingsDifficulty = document.getElementById('difficulty');

// Score and Time DOM Elements
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');

// Word and Text Input DOM Elements
const word = document.getElementById('word');
const text = document.getElementById('text');

// End Game Container DOM Element
const endGameElement = document.getElementById('end-game-container');


// The pool of words for the game
const wordList = ['a', 'ability', 'able', 'about', 'above'];

// 1.Initialize word to display
let randomWord;

// 2. Initialize  time
let time = 15;

// 3. Initialize score
let score = 0;

// 4. Initialize difficulty
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';

settingsDifficulty.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';

// On page load, focus on the text input so user can type
text.focus();

// Start the countdown of the timer
const timeInterval = setInterval(updateTime, 1000);

// Functions
// 1. Generate a word at random from wordList
function generateRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

// 2. Function to Add the Random word to the DOM
function addWordToDOM() {
    randomWord = generateRandomWord();
    word.innerHTML = randomWord;
}

// 3. Function to Update the score
function updateScore() {
    score++;
    scoreElement.innerHTML = score;
}

// 4. Function to update the time
function updateTime() {
    // Decrement time by 1 second
    time--;
    // Updating DOM time element
    timeElement.innerHTML = `${time}s`;
    // Check if time has expired
    if (time === 0) {
        // Stop countdow at 0
        clearInterval(timeInterval);
        // End the game by showing the end game container
        gameOver();
    }

}

// 5. Function to end the game
function gameOver() {
    endGameElement.innerHTML = `
    <h1>The clock has run out!</h1>
    <p>Your score is ${score}</p>
    <button onClick="window.location.reload()">Play Again</button>
    `;
    endGameElement.style.display = 'flex';

}

addWordToDOM();

// Event Listeners
// 1. Event Listener on Text Input
text.addEventListener('input', (e) => {
    // Get the value from the user input
    const typedText = e.target.value;

    // Check if user input matches random word
    if (typedText === randomWord) {
        // Display a new word
        addWordToDOM();
        // Update the Score
        updateScore();
        // Clear the input field
        e.target.value = '';
        // Add more time to the clock based on difficulty
        if (difficulty === 'easy') {
            time += 5;
        } else if (difficulty === 'medium') {
            time += 4;
        } else {
            time += 3;
        }
        updateTime();
    }
});

// 2. When clicking the settings button 
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide');

});

// 3. When changing the difficulty settings
settingsForm.addEventListener('change', (e) => {
    const difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);

})