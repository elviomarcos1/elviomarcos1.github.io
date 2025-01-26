const buttonArrowRight = document.querySelector('.main-button.-about.-right');
const buttonArrowLeft = document.querySelector('.main-button.-about.-left');
const items = document.querySelector('.items');

let pixel = 0;

buttonArrowLeft.addEventListener('click', function(){
    pixel = pixel + 100;
    items.style = `transform: translateX(${pixel}px)`;
});

buttonArrowRight.addEventListener('click', function(){
    pixel = pixel - 100;
    items.style = `transform: translateX(${pixel}px)`;
});