const username = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = document.getElementById("submitButton");

const images = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let imgId = 0;

submitButton.disabled = true;

username.addEventListener("keyup", checkInput);
password.addEventListener("keyup", checkInput);

submitButton.addEventListener("click", showMessage);

function checkInput() {
    if (username.value !== "" && password.value.length > 5) {
        submitButton.disabled = false;
        submitButton.classList.add("active-button");
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove("active-button");
    }
}

function showMessage() {
    alert("Simulação de login feita com sucesso!")
}

function carousel() {
    imgId++;

    if (imgId > img.length - 1) imgId = 0;

    images.style.transform = `translateX(${-imgId * 250}px)`;
}

setInterval(carousel, 2000);