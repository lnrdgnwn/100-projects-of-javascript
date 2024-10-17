const quoteDisplay = document.getElementById('quote');
const quoteInput = document.getElementById('quote-input');
const timerElement = document.getElementById('timer');
const mistakesElement = document.querySelector('.mistakes');
const accuracyElement = document.getElementById('accuracy');
const wpmElement = document.getElementById('wpm');

let timer;
let time = 0;
let quote = "";
let mistakes = 0;
let totalTyped = 0;
let startTime;
let isTestActive = false;

// Predefined set of quotes
const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Do not watch the clock; do what it does. Keep going.",
    "The only way to do great work is to love what you do.",
    "You miss 100% of the shots you don't take.",
    "It always seems impossible until it’s done.",
    "The purpose of our lives is to be happy.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Don't count the days, make the days count.",
    "Believe you can and you're halfway there."
];

// Start the typing test
function startTest() {
    if (isTestActive) return; // Prevent restarting the test if already active
    isTestActive = true;

    // Reset everything
    resetTest();

    // Get a random quote
    quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = quote;

    // Start timer
    startTime = new Date();
    timer = setInterval(updateTimer, 1000);

    // Focus the input field
    quoteInput.focus();
}

// Stop the typing test
function stopTest() {
    clearInterval(timer);
    isTestActive = false;
    calculateResults();
}

// Update the timer every second
function updateTimer() {
    time++;
    timerElement.textContent = `${time}s`;
}

// Handle user input
quoteInput.addEventListener('input', () => {
    const input = quoteInput.value;
    totalTyped++;

    // Check for mistakes
    const quoteSubstring = quote.slice(0, input.length);
    if (input === quoteSubstring) {
        quoteInput.classList.remove('border-red-500');
        quoteInput.classList.add('border-green-500');
    } else {
        mistakes++;
        mistakesElement.textContent = mistakes;
        quoteInput.classList.remove('border-green-500');
        quoteInput.classList.add('border-red-500');
    }

    // If the quote is fully typed correctly
    if (input === quote) {
        stopTest();
    }
});

// Calculate accuracy and speed
function calculateResults() {
    const accuracy = ((totalTyped - mistakes) / totalTyped) * 100;
    const wpm = (totalTyped / 5) / (time / 60); // Words per minute (average word length is 5)

    accuracyElement.textContent = `${accuracy.toFixed(2)}%`;
    wpmElement.textContent = `${wpm.toFixed(2)} WPM`;
}

// Reset the test
function resetTest() {
    clearInterval(timer);
    time = 0;
    mistakes = 0;
    totalTyped = 0;
    quoteInput.value = '';
    timerElement.textContent = '0s';
    mistakesElement.textContent = '0';
    accuracyElement.textContent = '';
    wpmElement.textContent = '';
    quoteInput.classList.remove('border-red-500', 'border-green-500');
}
