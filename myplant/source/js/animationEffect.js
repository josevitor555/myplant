import 'animate.css';

const elementsToAnimate = document.querySelectorAll('.main-text');
const animationForCenterTitle = document.querySelectorAll('.center-title');

function addAnimationClass() {
    
    elementsToAnimate.forEach(element => {
        element.classList.add('animate__animated', 'animate__flash');
    });

    animationForCenterTitle.forEach(titleAnimation => {
        titleAnimation.classList.add('animate__animated', 'animate__fadeIn');
    });
}

document.addEventListener('DOMContentLoaded', addAnimationClass);