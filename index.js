
let timer = document.querySelector('#timer');

let stopping = true;
let stopTimer = document.querySelector('#stopTimer');
stopTimer.addEventListener('click', () => {
    stopping = true;
})

function startTimer() {
    t = 0;
    stopping = false;

    setInterval ( () => {
        if (!stopping){
        t += .01
        timer.textContent = t;
        } else {
            clearInterval();
        }
    }, 10)

}

let startButton = document.querySelector('#startTimer')
startButton.addEventListener('click', () => {
    startTimer();
})

let buttonOne = document.querySelector('#one');
let contentOne = document.querySelector('#div1')
let arrayOne = []
buttonOne.addEventListener('click', () => {
    arrayOne.push(` ${t}`);
    contentOne.textContent = arrayOne;
})

let buttonTwo = document.querySelector('#two');
let contentTwo = document.querySelector('#div2')
let arrayTwo = []
buttonTwo.addEventListener('click', () => {
    arrayTwo.push(` ${t.textContent}`);
    contentTwo.textContent = arrayTwo;
})

let buttonThree = document.querySelector('#three');
let contentThree = document.querySelector('#div3')
let arrayThree = []
buttonThree.addEventListener('click', () => {
    arrayThree.push(` ${t.textContent}`);
    contentThree.textContent = arrayThree;
})

let buttonFour = document.querySelector('#four');
let contentFour = document.querySelector('#div4')
let arrayFour = []
buttonFour.addEventListener('click', () => {
    arrayFour.push(` ${t.textContent}`);
    contentFour.textContent = arrayFour;
})

let buttonFive = document.querySelector('#five');
let contentFive = document.querySelector('#div5')
let arrayFive = []
buttonFive.addEventListener('click', () => {
    arrayFive.push(` ${t.textContent}`);
    contentFive.textContent = arrayFive;
})

let buttonSix = document.querySelector('#six');
let contentSix = document.querySelector('#div6')
let arraySix = []
buttonSix.addEventListener('click', () => {
    arraySix.push(` ${t.textContent}`);
    contentSix.textContent = arraySix;
})

let buttonSeven = document.querySelector('#seven');
let contentSeven = document.querySelector('#div7')
let arraySeven = []
buttonSeven.addEventListener('click', () => {
    arraySeven.push(` ${t.textContent}`);
    contentSeven.textContent = arraySeven;
})

let buttonEight = document.querySelector('#eight');
let contentEight = document.querySelector('#div8')
let arrayEight = []
buttonEight.addEventListener('click', () => {
    arrayEight.push(` ${t.textContent}`);
    contentEight.textContent = arrayEight;
})