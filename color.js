
const colorButton = document.getElementById("color-button");

colorButton.addEventListener("click", function() {
  
  const newColor = getRandomColor();
  
  const colorCode = document.getElementById("color-code");
  colorCode.textContent = newColor;
  
  document.body.style.backgroundColor = newColor;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
