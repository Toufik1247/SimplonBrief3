const delay = 3000; //ms

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

    // Update radio buttons
    updateRadioButtons();
}

let autoChange = setInterval(changeSlide, delay);
const restart = function () {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
};

// Controls
const radioButtons = document.querySelectorAll('input[name="slide-control"]');
radioButtons.forEach((button) => {
    button.addEventListener("click", function () {
        current = parseInt(this.value);
        slides.style.left = current + "%";
        restart();
        updateRadioButtons();
    });
});

// Disable autoChange when radio button is clicked
slides.addEventListener("click", function () {
    clearInterval(autoChange);
});

// Update radio buttons based on current slide
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
