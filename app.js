

const timer = document.getElementById("timer");
const startButtons = document.getElementById("start");
const stopButtons = document.getElementById("stop");
const restartButtons = document.getElementById("restart");

let starttime = 0;
let elapsedtime = 0;
let timeinterval;

function startTimer() {
    starttime = Date.now() - elapsedtime;

    timeinterval = setInterval(() => {
        elapsedtime = Date.now() - starttime;
        timer.textContent = formatTime(elapsedtime);
    }, 10);

    startButtons.disabled = true;
    stopButtons.disabled = false;


}

function formatTime(elapsedtime) {
    const second = Math.floor((elapsedtime % (1000 * 60)) / 1000);
    const minute = Math.floor((elapsedtime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedtime / (1000 * 60 * 60));

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minute ? (minute > 9 ? minute : "0" + minute) : "00") +
        ":" +
        (second ? (second > 9 ? second : "0" + second) : "00")
    );
}

function stopTimer() {
    clearInterval(timeinterval);
    startButtons.disabled = false;
    stopButtons.disabled = true;
}

function restartTimer() {
    clearInterval(timeinterval);
    elapsedtime = 0;
    timer.textContent = "00:00:00";


    startButtons.disabled = false;
    stopButtons.disabled = true;
}

startButtons.addEventListener('click', startTimer);
stopButtons.addEventListener("click", stopTimer);
restartButtons.addEventListener("click", restartTimer);