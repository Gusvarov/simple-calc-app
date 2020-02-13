const openCalc = document.querySelector('.open');
const closeCalc = document.querySelector('.close');
const wrapper = document.querySelector('.wrapper');
const firstNum = document.querySelectorAll('.first-num');
const secondNum = document.querySelectorAll('.second-num');
const thirdNum = document.querySelectorAll('.third-num');
const checkBox = document.querySelectorAll('.checkbox');
const sum = document.querySelector('#sum');
const multiply = document.querySelector('#multiply');
const numbers = document.querySelectorAll('.number');
const firstSection = [firstNum[0], secondNum[0], thirdNum[0]];
const secondSection = [firstNum[1], secondNum[1], thirdNum[1]];
const thirdSection = [firstNum[2], secondNum[2], thirdNum[2]];

sum.addEventListener('change', () => {
    let firstSum = firstSection.reduce((total,item) => total + +item.value, 0);
    numbers[0].innerHTML = firstSum;
    let secondSum = secondSection.reduce((total,item) => total + +item.value, 0);
    numbers[1].innerHTML = secondSum;
    let thirdSum = thirdSection.reduce((total,item) => total + +item.value, 0);
    numbers[2].innerHTML = thirdSum;
})

multiply.addEventListener('change', () => {
    let firstMultiply = firstSection.reduce((total,item) => total * item.value, 1);
    numbers[0].innerHTML = firstMultiply;
    let secondSum = secondSection.reduce((total,item) => total * item.value, 1);
    numbers[1].innerHTML = secondSum;
    let thirdSum = thirdSection.reduce((total,item) => total * item.value, 1);
    numbers[2].innerHTML = thirdSum;
})

function toggleModal() {
    wrapper.classList.toggle('display-none');
    openCalc.classList.toggle('display-none');
    closeCalc.classList.toggle('close');
    closeCalc.classList.toggle('open');
    document.body.classList.toggle('modal');
}

openCalc.addEventListener('click', () => toggleModal());

closeCalc.addEventListener('click', () => toggleModal());