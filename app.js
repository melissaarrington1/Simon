console.log('Hey Simon')

//Global Variables
let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalID;
let strict = false;
let noise = true;
let on = false;
let win;

//Elements that we can interact with
const turnCounter = document.querySelector('#turn')
const topLeft = document.querySelector('.green')
const topRight = document.querySelector('.red')
const bottomLeft = document.querySelector('.yellow')
const bottomRight = document.querySelector('.blue')
const strictButton = document.querySelector('#strict')
const onButton = document.querySelector('#on')
const startButton = document.querySelector('#start')

strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
        strict = true
    } else {
        strict = false
    }
})

onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
        on = true
        turnCounter.innerHTML = '-'
    } else {
        turnCounter.innerHTML = ''
    }
})