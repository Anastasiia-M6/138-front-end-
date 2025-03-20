function setupSection(showButtonId, span1Id, showButton2Id, span2Id, showButton3Id, span3Id, showButton4Id, span4Id) {
    let step = 0;

    document.getElementById(showButtonId).addEventListener("click", function () {
        if (step === 0) {
            document.getElementById(span1Id).style.display = "inline";
        } else if (step === 1) {
            document.getElementById(span2Id).style.display = "inline";
        } else if (step === 2) {
            document.getElementById(span3Id).style.display = "inline";
        } else if (step === 3) {
            document.getElementById(span4Id).style.display = "inline";
        } else if (showButton1Id && span1Id && step === 4) {
            document.getElementById(span4Id).style.display = "inline";
            this.disabled = true;
        }
        step++;
    });

    if (showButton2Id) {
        document.getElementById(showButton2Id).addEventListener("click", function () {
            document.getElementById(span2Id).style.display = "inline";
        });
    }

    if (showButton3Id) {
        document.getElementById(showButton3Id).addEventListener("click", function () {
            document.getElementById(span3Id).style.display = "inline";
        });
    }

    if (showButton4Id) {
        document.getElementById(showButton4Id).addEventListener("click", function () {
            document.getElementById(span4Id).style.display = "inline";
        });
    }
}

// Подключаем обработчики для каждой секции
setupSection("showButton_1", "span_1_1", "showButton_2_1", "span_2_1", "showButton_3_1", "span_3_1");
setupSection("showButton_2", "span_1_2", "showButton_2_2", "span_2_2", "showButton_3_2", "span_3_2");
setupSection("showButton_3", "span_1_3", "showButton_2_3", "span_2_3", "showButton_3_3", "span_3_3", "showButton_4_4", "span_4_4");
setupSection("showButton_4", "span_1_4", "showButton_2_4", "span_2_4");

//черновик

//     document.getElementById("showButton_1").addEventListener("click", function () {
//         if (step === 0) {
//             document.getElementById("span_1_1").style.display = "inline";
//         } else if (step === 1) {
//             document.getElementById("span_2_1").style.display = "inline";
//         } else if (step === 2) {
//             document.getElementById("span_3_1").style.display = "inline";
//         } else if (step === 3) {
//             document.getElementById("span_3_1").style.display = "inline";
//             this.disabled = true; // Отключаем кнопку после последнего шага
//         }

//         step++; // Увеличиваем шаг
//     });
//     document.getElementById("showButton_2_1").addEventListener("click", function () {
//         if (step === 1) {
//             document.getElementById("span_2_1").style.display = "inline";
//         } else if (step === 2) {
//             document.getElementById("span_3_1").style.display = "inline";
//         } else if (step === 3) {
//             document.getElementById("span_3_1").style.display = "inline";
//             this.disabled = true; // Отключаем кнопку после последнего шага
//         }
//         step++; // Увеличиваем шаг
//     });
//     document.getElementById("showButton_3_1").addEventListener("click", function () {
//         if (step === 2) {
//             document.getElementById("span_3_1").style.display = "inline";
//         } else if (step === 2) {
//             document.getElementById("span_1_1").style.display = "inline";
//             this.disabled = true; // Отключаем кнопку после последнего шага
//         }
//         step++; // Увеличиваем шаг
//     });
// }

