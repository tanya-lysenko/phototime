document.addEventListener('click', function (e) {
    const condition1 = e.target.href === '#';
    const condition2 = e.target.closest(`[href="#"]`);

    if (condition1 || condition2) {
        e.preventDefault();
    }
});

const form = document.querySelector(`[name="your-email-form"]`);
const input = form.querySelector(`[name="your-email"]`);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const value = input.value.trim();

    const condition1 = value.indexOf('@') > 0;
    const condition2 = value.indexOf('.') > 0;
    const condition3 = value.length > 4;

    if (condition1 && condition2 && condition3) {
        input.style.boxShadow = 'inset 0px 0px 0px 5px #0f0';
    } else {
        input.style.boxShadow = 'inset 0px 0px 0px 5px #f00';
    }
});

input.addEventListener('focus', resetShadow);
input.addEventListener('input', resetShadow);
input.addEventListener('paste', resetShadow);

function resetShadow() {
    input.style.boxShadow = 'none';
}

const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', function () {
    const list = document.querySelector('#header nav ul');
    list.classList.toggle('open');
});