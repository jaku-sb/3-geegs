
// квадратус
    const parentBlock = document.querySelector('.parent_block');
        const childBlock = document.querySelector('.child_block');
            const offWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
                const offHeight = parentBlock.offsetHeight - childBlock.offsetHeight;


let positionX = 0;
let positionY = 0;
let direction = 'right';


const moveBlock = () => {
    if (direction === 'right') {

        if (positionX < offWidth) {
            positionX++;
        } else {
            direction = 'down';
        }
    } else if (direction === 'down') {

        if (positionY < offHeight) {
            positionY++;
        } else {
            direction = 'left';
        }
    } else if (direction === 'left') {

        if (positionX > 0) {
            positionX--;
        } else {
            direction = 'up';
        }
    } else if (direction === 'up') {

        if (positionY > 0) {
            positionY--;
        } else {
            direction = 'right';
        }
    }


    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;


    requestAnimationFrame(moveBlock);
};


childBlock.style.position = 'absolute';
childBlock.style.left = '0px';
childBlock.style.top = '0px';

moveBlock();

// валидность почтуса
document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('#gmail_input');
    const checkButton = document.querySelector('#gmail_button');
    const resultSpan = document.querySelector('#gmail_result');


    const isValidGmail = (email) => {
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return gmailRegex.test(email);
    };


    checkButton.addEventListener('click', (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (isValidGmail(email)) {
            resultSpan.textContent = 'Valid Gmail address!';
            resultSpan.style.color = 'green';
        } else {
            resultSpan.textContent = 'Invalid Gmail address. Use format: example@gmail.com';
            resultSpan.style.color = 'red';
        }
    });
});




// таймерус в секундычах с кнопочами
document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    let intervalId = null;

    const secondsDisplay = document.querySelector('#seconds');
    const startButton = document.querySelector('#start');
    const stopButton = document.querySelector('#stop');
    const resetButton = document.querySelector('#reset');


    const updateDisplay = () => {
        secondsDisplay.textContent = counter;
    };


    const startTimer = () => {
        if (intervalId === null) {
            intervalId = setInterval(() => {
                counter++;
                updateDisplay();
            }, 1000);
        }
    };


    const stopTimer = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };


    const resetTimer = () => {
        stopTimer();
        counter = 0;
        updateDisplay();
    };


    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);


    updateDisplay();
});
