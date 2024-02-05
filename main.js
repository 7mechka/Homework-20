const timeDelay = 300
let isStarting = false
let timer
let counter = 0

let button = document.querySelector('.btn')
let state = document.querySelector('.function_status')
let timerState = document.querySelector('.function_timer')
let delayState = document.querySelector('.function_delay')
let container = document.querySelector('.container')

button.addEventListener('click', () => {
    debounce(timeDelay)
})
function debounce(delay) {
    if (isStarting && timer) {
        updateTimer(delay)
        state.innerText = 'Функція обновилась'
    }
    if (!isStarting) {
        isStarting = true
        state.innerText = 'Функція запустилась'
        delayState.innerHTML = delay
        container.style.display = 'flex'
        timer = setInterval(() => {timeCheck(delay)}, 10)
    }
}
function updateTimer(delay) {
    clearInterval(timer)
    counter = 0
    timer = setInterval(() => {timeCheck(delay)}, 10)
}
function timeCheck(delay) {
    counter++
    timerState.innerText = counter
    if (counter >= delay) {
        counter = 0
        state.innerText = 'Функція виконана'
        clearInterval(timer)
        isStarting = false
    }
}