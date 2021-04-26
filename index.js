
let timer = document.querySelector('#timer');
let t = 0;
let stopping = true;
let stopTimer = document.querySelector('#stopTimer');
stopTimer.addEventListener('click', () => {
    stopping = true;
})

function startTimer() {
    setInterval ( () => {
        if (!stopping){
        t += .01
        timer.textContent = t;
        }
    }, 10)
} startTimer();

let startButton = document.querySelector('#startTimer')
startButton.addEventListener('click', () => {
    t = 0;
    stopping=false;
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
    arrayTwo.push(` ${t}`);
    contentTwo.textContent = arrayTwo;
})

let buttonThree = document.querySelector('#three');
let contentThree = document.querySelector('#div3')
let arrayThree = []
buttonThree.addEventListener('click', () => {
    arrayThree.push(` ${t}`);
    contentThree.textContent = arrayThree;
})

let buttonFour = document.querySelector('#four');
let contentFour = document.querySelector('#div4')
let arrayFour = []
buttonFour.addEventListener('click', () => {
    arrayFour.push(` ${t}`);
    contentFour.textContent = arrayFour;
})

let buttonFive = document.querySelector('#five');
let contentFive = document.querySelector('#div5')
let arrayFive = []
buttonFive.addEventListener('click', () => {
    arrayFive.push(` ${t}`);
    contentFive.textContent = arrayFive;
})

let buttonSix = document.querySelector('#six');
let contentSix = document.querySelector('#div6')
let arraySix = []
buttonSix.addEventListener('click', () => {
    arraySix.push(` ${t}`);
    contentSix.textContent = arraySix;
})

let buttonSeven = document.querySelector('#seven');
let contentSeven = document.querySelector('#div7')
let arraySeven = []
buttonSeven.addEventListener('click', () => {
    arraySeven.push(` ${t}`);
    contentSeven.textContent = arraySeven;
})

let buttonEight = document.querySelector('#eight');
let contentEight = document.querySelector('#div8')
let arrayEight = []
buttonEight.addEventListener('click', () => {
    arrayEight.push(` ${t}`);
    contentEight.textContent = arrayEight;
})