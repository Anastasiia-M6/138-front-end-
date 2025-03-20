let step = 0; // Переменная для отслеживания этапа

document.getElementById("bttn").addEventListener("click", function () {
    if (step === 0) {
        document.getElementById("spn_1").style.display = "inline";
    } else if (step === 1) {
        document.getElementById("spn_2").style.display = "inline";
    } else if (step === 2) {
        document.getElementById("spn_3").style.display = "inline";
    } else if (step === 3) {
        document.getElementById("spn_3").style.display = "inline";
        this.disabled = true; // Отключаем кнопку после последнего шага
    }

    step++; // Увеличиваем шаг
});
document.getElementById("bttn_2").addEventListener("click", function () {
    if (step === 1) {
        document.getElementById("span_1.2").style.display = "inline";
    } else if (step === 2) {
        document.getElementById("span_1.3").style.display = "inline";
    } else if (step === 3) {
        document.getElementById("span_1.3").style.display = "inline";
        this.disabled = true; // Отключаем кнопку после последнего шага
    }
    step++; // Увеличиваем шаг
});
document.getElementById("bttn_3").addEventListener("click", function () {
    if (step === 2) {
        document.getElementById("span_1.3").style.display = "inline";
    } else if (step === 2) {
        document.getElementById("span_1.1").style.display = "inline";
        this.disabled = true; // Отключаем кнопку после последнего шага
    }
    step++; // Увеличиваем шаг
});
