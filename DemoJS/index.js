const colors = [
  "DodgerBlue",
  "MediumSeaGreen",
  "SlateBlue",
  "Violet",
  "Gray",
  "LightGray",
  "tomato",
];

const boxElement = document.getElementById("box");
let flag = 0;

function getIndexRamdomOfColor() {
  const indexOfColors = Math.trunc(Math.random() * colors.length);
  if (indexOfColors !== flag) {
    flag = indexOfColors;
    return indexOfColors;
  } else {
    return getIndexRamdomOfColor();
  }
}

boxElement.addEventListener("click", function () {
  const index = getIndexRamdomOfColor();
  boxElement.style.backgroundColor = colors[index];
});

// ==================================================

const boxElements = document.querySelectorAll(".box1");
const buttonRamdomElement = document.getElementById("buttonRamdom");

buttonRamdomElement.addEventListener("click", function () {
  setInterval(() => {
    boxElements.forEach((element) => {
      const index = getIndexRamdomOfColor();
      element.style.backgroundColor = colors[index];
    });
  }, 500);
});

// hình dung luôn được cách làm
// có thể làm được (tốn thời gian mò)
// Chưa hình dung ra cách làm
