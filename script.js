'use strict';

// DOM SELECTIONS
// Buttons
const buttonDont = document.querySelector('.btn-dont');
const buttonTwo = document.querySelector('.btn-2');

// const buttonTwo = document.getElementsByClassName("btn-2");
function alertBtn() {
  alert('Idk');
}

// EVENT LISTENERS - BUTTONS
buttonDont.addEventListener('click', pleaseNo());
buttonTwo.addEventListener('click', alertBtn);

// const dontButton = document.getElementById("btndont");
// console.log(dontButton);
// dontButton.addEventListener("click", pleaseNo);

function pleaseNo() {
  // iterate through alerts that keep saying messages
  const statements = ['please no', 'dont do it', '...'];
  let counter = 0;
  return () => {
    if (counter === 3) counter = 0;
    alert(statements[counter]);
    counter++;
  };
}

// event
