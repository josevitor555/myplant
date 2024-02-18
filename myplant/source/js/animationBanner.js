import 'animate.css';

const elementsToAnimate = document.querySelectorAll('.main-text');

function addAnimationClass() {
    elementsToAnimate.forEach(element => {
        element.classList.add('animate__animated', 'animate__flash');
    });
}

document.addEventListener('DOMContentLoaded', addAnimationClass);