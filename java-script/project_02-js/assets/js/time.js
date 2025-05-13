
function startCountdown(durationInSeconds) {
    let timerDisplay = document.getElementById("timer");
    let endTime = Date.now() + durationInSeconds * 1000;
    function updateCountdown() {
        let timeLeft = endTime - Date.now();
        if (timeLeft <= 0) {
            timerDisplay.textContent = "00 : 00 : 00";
            clearInterval(interval);
            return;
        }
        let hours = String(Math.floor(timeLeft / 3600000)).padStart(2, '0');
        let minutes = String(Math.floor((timeLeft % 3600000) / 60000)).padStart(2, '0');
        let seconds = String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, '0');
        timerDisplay.textContent = `${hours} : ${minutes} : ${seconds}`;
    }
    let interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}
startCountdown(2 * 3600 + 4 * 60 + 46);
