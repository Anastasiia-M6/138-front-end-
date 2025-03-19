
function registerUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let note = document.getElementById("note").value;
    let agree = document.getElementById("agree").checked;

    if (name === "" || email === "" || phone === "") {
        alert("Будь ласка, заповніть всі обов'язкові поля!");
        return;
    }

    if (!agree) {
        alert("Ви повинні погодитися на обробку персональних даних!");
        return;
    }

    // Сохраняем данные в localStorage
    let userData = {
        name: name,
        email: email,
        phone: phone,
        note: note
    };

    localStorage.setItem("registeredUser", JSON.stringify(userData));

    // Показываем сообщение
    document.getElementById("successMessage").style.display = "block";

    // Очищаем поля
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("note").value = "";
    document.getElementById("agree").checked = false;
}
