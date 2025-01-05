const buttonArrowRight = document.querySelector('.main-button.-about.-right');
const buttonArrowLeft = document.querySelector('.main-button.-about.-left');
const items = document.querySelector('.items');

let pixel = 70;


buttonArrowRight.addEventListener('click', function(){
    pixel -= 70;
    items.style = `transform: translateX(${pixel}px)`;
});

buttonArrowLeft.addEventListener('click', function(){
    pixel += 70;
    items.style = `transform: translateX(${pixel}px)`;
});