const btnFlip = document.getElementById('btn-flip');
const headsDiv = document.querySelector('.heads');
const tailsDiv = document.querySelector('.tails');
const headsCountEl = document.getElementById('heads-count');
const tailsCountEl = document.getElementById('tails-count');
const btnReset = document.getElementById('btn-reset');

let headsCount = 0;
let tailsCount = 0;
let isFlipping = false;

btnFlip.addEventListener('click', () => {
    if (isFlipping) return;
    isFlipping = true;

    headsDiv.classList.remove('hidden');
    tailsDiv.classList.add('hidden');

    const spinDuration = 1000;
    const flipInterval = 200;
    let flipCount = 0;

    const flipCoin = setInterval(() => {
        if (flipCount % 2 === 0) {
            headsDiv.classList.remove('hidden');
            tailsDiv.classList.add('hidden');
            headsDiv.classList.add('animate-spinX');
            tailsDiv.classList.remove('animate-reverseSpinX');
        } else {
            headsDiv.classList.add('hidden');
            tailsDiv.classList.remove('hidden');
            tailsDiv.classList.add('animate-reverseSpinX');
            headsDiv.classList.remove('animate-spinX');
        }
        flipCount++;

        if (flipCount * flipInterval >= spinDuration) {
            clearInterval(flipCoin);
            headsDiv.classList.add('hidden');
            tailsDiv.classList.add('hidden');

            const result = Math.random() < 0.5 ? 'heads' : 'tails';
            if (result === 'heads') {
                headsCount++;
                headsCountEl.textContent = `Heads : ${headsCount}`;
                headsDiv.classList.remove('hidden');
            } else {
                tailsCount++;
                tailsCountEl.textContent = `Tails : ${tailsCount}`;
                tailsDiv.classList.remove('hidden');
            }
            isFlipping = false;
        }
    }, flipInterval);
});

btnReset.addEventListener('click', () => {
    headsCount = 0;
    tailsCount = 0;
    headsCountEl.textContent = `Heads : ${headsCount}`;
    tailsCountEl.textContent = `Tails : ${tailsCount}`;
    headsDiv.classList.remove('hidden');
    tailsDiv.classList.add('hidden');
});
