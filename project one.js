
const newYear = new Date("January 1, 2026 00:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYear - now;

    if (gap <= 0) {
        
        clearInterval(countdownInterval);
        daysEl.innerText = "00";
        hoursEl.innerText = "00";
        minutesEl.innerText = "00";
        secondsEl.innerText = "00";
        return;
    }
    

    const seconds = Math.floor((gap / 1000) % 60);
    const minutes = Math.floor((gap / 1000 / 60) % 60);
    const hours = Math.floor((gap / 1000 / 60 / 60) % 24);
    const days = Math.floor(gap / 1000 / 60 / 60 / 24);

    daysEl.innerText = days < 10 ? "0" + days : days;
    hoursEl.innerText = hours < 10 ? "0" + hours : hours;
    minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
}


const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
