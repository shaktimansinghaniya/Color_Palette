// make five random color function is here ...
const colorOne = () => {
  const letters = "0123456789ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += letters[Math.floor(Math.random() * 16)];
  }
  // console.log(hash);
  const button = document.getElementById("button-1");
  button.value = hash;
  button.style.background = hash;
  
  function fname() {
    const body = document.querySelector(".container");
    body.style.background = hash;
    // console.log(" body:", body);
  }
  // fname();
  button.addEventListener("mouseover", fname);
}
// const colorOne = () => {
//   const letters = "0123456789ABCDEF";
//   let hash = "#";
//   for (let i = 0; i < 6; i++) {
//     hash += letters[Math.floor(Math.random() * 16)];
//   }
//   // console.log(hash);
//   const button = document.getElementById("button-1");
//   button.value = hash;
//   button.style.background = hash;
// }
const colorTwo = () => {
  const letters = "0123456789ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += letters[Math.floor(Math.random() * 16)];
  }
  // console.log(hash);
  const button = document.getElementById("button-2");
  button.value = hash;
  button.style.background = hash;
  
  function fname() {
    const body = document.querySelector(".container");
    body.style.background = hash;
    // console.log(" body:", body);
  }
  // fname();
  button.addEventListener("mouseover", fname);
}
const colorThree = () => {
  const letters = "0123456789ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += letters[Math.floor(Math.random() * 16)];
  }
  // console.log(hash);
  const button = document.getElementById("button-3");
  button.value = hash;
  button.style.background = hash;
  
  function fname() {
    const body = document.querySelector(".container");
    body.style.background = hash;
    // console.log(" body:", body);
  }
  // fname();
  button.addEventListener("mouseover", fname);
}
const colorFour = () => {
  const letters = "0123456789ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += letters[Math.floor(Math.random() * 16)];
  }
  // console.log(hash);
  const button = document.getElementById("button-4");
  button.value = hash;
  button.style.background = hash;
  
  function fname() {
    const body = document.querySelector(".container");
    body.style.background = hash;
    // console.log(" body:", body);
  }
  // fname();
  button.addEventListener("mouseover", fname);
}
const colorFive = () => {
  const letters = "0123456789ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += letters[Math.floor(Math.random() * 16)];
  }
  // console.log(hash);
  const button = document.getElementById("button-5");
  button.value = hash;
  button.style.background = hash;
  
  function fname() {
    const body = document.querySelector(".container");
    body.style.background = hash;
    // console.log(" body:", body);
  }
  // fname();
  button.addEventListener("mouseover", fname);
}

// converting all in one function...
const allColor = () => {
  colorOne();
  colorTwo();
  colorThree();
  colorFour();
  colorFive();
  
  function btnColor() {
    const btn = document.querySelector(".btn");
    const randomNumer = Math.floor(Math.random() * 16777215);
    randomNumer.toString(16);
    const randomCode = "#" + randomNumer.toString(16);
    // console.log(randomNumer, randomCode)
    btn.style.background = randomCode;
  }
  
  function btnColorText() {
    const btn = document.querySelector(".btn");
    const randomNumer = Math.floor(Math.random() * 16777215);
    randomNumer.toString(16);
    const randomCode = "#" + randomNumer.toString(16);
    // console.log(randomNumer, randomCode)
    btn.style.color = randomCode;
  }
  // btnColorText();
  return btnColor();
  // calling for all color 
}
allColor();

const btn = document.querySelector(".btn");
btn.addEventListener("click", allColor);