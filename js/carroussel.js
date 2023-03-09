const delay = 3000;

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
    if (next) {
        current += current > maxLeft ? -100 : current * -1;
    } else {
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + "%";

    // Mise à jour des boutons radio
    updateRadioButtons();
}

let autoChange = setInterval(changeSlide, delay);
const restart = function () {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
};

// Boutons
const radioButtons = document.querySelectorAll('input[name="slide-control"]');
radioButtons.forEach((button) => {
    button.addEventListener("click", function () {
        current = parseInt(this.value);
        slides.style.left = current + "%";
        restart();
        updateRadioButtons();
    });
});

// Desactive autochange quand un bouton est cliqué
slides.addEventListener("click", function () {
    clearInterval(autoChange);
});

// Fais correspondre le bouton à la slide courante
function updateRadioButtons() {

    const radioButtons = document.querySelectorAll('input[name="slide-control"]');
    radioButtons.forEach((button, index) => {
        button.checked = false;
        if (current == parseInt(button.value)) {
            button.checked = true;
            const labels = document.querySelectorAll('.carousel .controls label');
            labels.forEach((label) => {
                label.classList.remove('active');
            });
            labels[index].classList.add('active');
        }
    });
}
