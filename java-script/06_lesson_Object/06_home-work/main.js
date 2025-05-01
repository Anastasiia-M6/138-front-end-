const users = [];

const nameInput = document.querySelector('input[placeholder="name"]');
const ageInput = document.querySelector('input[placeholder="age"]');
const emailInput = document.querySelector('input[placeholder="E-mail"]');
const phoneInput = document.querySelector('input[placeholder="Phone"]');
const genderSelect = document.querySelector('select');
const pass1 = document.querySelectorAll('input[placeholder="password"]')[0];
const pass2 = document.querySelectorAll('input[placeholder="password"]')[1];
const registerBtn = document.querySelectorAll('button')[0];
const resetBtn = document.querySelectorAll('button')[1];
const userOut = document.querySelector('.user-out');
const outDiv = document.querySelector('.out');

function getGenderLabel(value) {
    if (value === "m") return "Чоловік";
    if (value === "w") return "Жінка";
    return "Не вказано";
}

function getAvatar(gender) {
    if (gender === "m") return "./img/man.png";
    if (gender === "w") return "./img/woman.png";
    return "./img/default.png"; // дефолтна аватарка
}

registerBtn.addEventListener('click', () => {
    if (pass1.value !== pass2.value) {
        alert("Паролі не співпадають!");
        return;
    }

    const user = {
        name: nameInput.value,
        age: ageInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        gender: genderSelect.value,
        password: pass1.value
    };

    users.push(user);
    userOut.textContent = users.length;

    // очистити інпути (не обов'язково)
    nameInput.value = '';
    ageInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    genderSelect.value = '';
    pass1.value = '';
    pass2.value = '';
});

resetBtn.addEventListener('click', () => {
    outDiv.innerHTML = '';
    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
                <img src="${getAvatar(user.gender)}" alt="Аватар">
                <h5>Імя: ${user.name}</h5>
                <ul>
                    <li>Років: ${user.age}</li>
                    <li>Email: ${user.email}</li>
                    <li>Телефон: ${user.phone}</li>
                    <li>Стать: ${getGenderLabel(user.gender)}</li>
                </ul>
            `;
        outDiv.appendChild(div);
    });
});