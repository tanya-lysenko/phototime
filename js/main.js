$(function () {
    // Пустые ссылки
    $("a[href='#']").click(function (e) {
        e.preventDefault();
    });
});

const form = document.querySelector(`[name="your-email-form"]`);
const input = form.querySelector(`[name="your-email"]`);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const value = input.value.trim();

    if (value.indexOf("@") > 0 && value.indexOf(".") > 0 && value.length > 4) {
        input.style.boxShadow = "inset 0px 0px 0px 5px #0f0";
    } else {
        input.style.boxShadow = "inset 0px 0px 0px 5px #f00";
    }
});

input.addEventListener("focus", resetShadow);
input.addEventListener("input", resetShadow);
input.addEventListener("paste", resetShadow);

function resetShadow() {
    input.style.boxShadow = "none";
}

const menuButton = document.querySelector(".menu");

menuButton.addEventListener("click", function () {
    const list = document.querySelector("#header nav ul");
    list.classList.toggle("open");
});