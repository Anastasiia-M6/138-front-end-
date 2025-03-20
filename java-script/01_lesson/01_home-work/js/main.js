let step = 0; // Переменная для отслеживания этапа

document.getElementById("showButton").addEventListener("click", function () {
    if (step === 0) {
        document.getElementById("span_1").style.display = "inline";
    } else if (step === 1) {
        document.getElementById("span_2").style.display = "inline";
    } else if (step === 2) {
        document.getElementById("span_3").style.display = "inline";
    } else if (step === 3) {
        document.getElementById("span_3").style.display = "inline";
        this.disabled = true; // Отключаем кнопку после последнего шага
    }

    step++; // Увеличиваем шаг
});
document.getElementById("showButton_2").addEventListener("click", function () {
    if (step === 1) {
        document.getElementById("span_2").style.display = "inline";
    } else if (step === 2) {
        document.getElementById("span_3").style.display = "inline";
    } else if (step === 3) {
        document.getElementById("span_3").style.display = "inline";
        this.disabled = true; // Отключаем кнопку после последнего шага
    }
    step++; // Увеличиваем шаг
});
document.getElementById("showButton_3").addEventListener("click", function () {
    if (step === 2) {
        document.getElementById("span_3").style.display = "inline";
    } else if (step === 2) {
        document.getElementById("span_1").style.display = "inline";
        this.disabled = true; // Отключаем кнопку после последнего шага
    }
    step++; // Увеличиваем шаг
});
