"use strict";

// DOM SELECTIONS
// Buttons
const buttonDont = document.querySelector(".btn-dont");
const buttonTwo = document.querySelector(".btn-2");
// Time
let time = document.getElementById("current-time");

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}, 1000);

console.log(time);

// const buttonTwo = document.getElementsByClassName("btn-2");
function alertBtn() {
  alert("Idk");
}

// EVENT LISTENERS - BUTTONS
buttonDont.addEventListener("click", pleaseNo());
buttonTwo.addEventListener("click", alertBtn);

// const dontButton = document.getElementById("btndont");
// console.log(dontButton);
// dontButton.addEventListener("click", pleaseNo);

function pleaseNo() {
  // iterate through alerts that keep saying messages
  const statements = ["please no", "dont do it", "..."];
  let counter = 0;
  return () => {
    alert(statements[counter]);
    counter++;
  };
}

// event
