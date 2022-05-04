let container = document.querySelector("#container");
console.log(container);
let bgItem = document.querySelector("#bg__item");
console.log(bgItem);
let changeBtn = document.querySelector(".change__btn");
console.log(changeBtn);
let bgSpan = document.querySelector("span");

let rgbToHex = function (rgb) {
 let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

changeBtn.addEventListener("click", () => {
  const firstColor = Math.floor(Math.random() * 255);
  const secondColor = Math.floor(Math.random() * 255);
  const thirdColor = Math.floor(Math.random() * 255);
  const rgbColor = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`
  container.style.backgroundColor = rgbColor ;
  bgSpan.innerHTML = `#${rgbToHex(firstColor)}${rgbToHex( secondColor)}${rgbToHex(thirdColor)}`;
  bgSpan.style.color=rgbColor
});
