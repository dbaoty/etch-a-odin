const reset = () => location.reload();

const captureScreenshot = async () => {
  // todo
};

function colorGridSquare() {
  let r = (Math.floor(Math.random() * 255));
  let g = (Math.floor(Math.random() * 255));
  let b = (Math.floor(Math.random() * 255));
  
  this.setAttribute("style", `border: 4px solid rgb(${r}, ${g}, ${b})`)
}
 
document.body.setAttribute("style", "display: flex; flex-flow: column wrap; align-items: center; background-color: rgb(230, 80, 80)");

const topSection = document.createElement("div");
topSection.setAttribute("style", "display: flex; flex-flow: row wrap");

const midSection = document.createElement("div");
midSection.setAttribute("style", "display: flex; max-width: 960px; border: 10px solid rgb(180, 80, 80)");

const bottomSection = document.createElement("div");
bottomSection.setAttribute("style", "display: flex; flex-flow: column wrap; margin-top: 20px; align-items: center");

const createGridButton = document.createElement("button");
createGridButton.setAttribute("style", "padding: 10px; margin: 20px");
createGridButton.innerText = "Shake 🤝";

createGridButton.addEventListener("click", reset);

const createScreenshotButton = document.createElement("button");
createScreenshotButton.setAttribute("style", "padding: 10px; margin: 20px");
createScreenshotButton.innerText = "Save 📷";

createScreenshotButton.addEventListener("click", captureScreenshot);

const logoImage = document.createElement("img");
logoImage.src = "res/logo.png";

const footer = document.createElement("div");
footer.innerText = "";

topSection.appendChild(createGridButton);
topSection.appendChild(createScreenshotButton);

document.body.appendChild(topSection);

let size = 0;
while (size < 1 || size > 100 || isNaN(size)) size = prompt("size of grid: ");

for (let i = 0; i < size; ++i) {
  let gridSquareContainer = document.createElement("div");
  gridSquareContainer.setAttribute("style", "display: flex; flex-flow: column wrap");

  for (let j = 0; j < size; ++j) {
    let gridSquare = document.createElement("div");
    gridSquare.setAttribute("style", "display: flex; flex-flow: row wrap; border: 4px solid rgb(240, 240, 240)");

    gridSquare.addEventListener("mouseover", colorGridSquare);

    gridSquareContainer.appendChild(gridSquare);
  }

  midSection.appendChild(gridSquareContainer);
}

bottomSection.appendChild(logoImage);
bottomSection.appendChild(footer);

document.body.appendChild(midSection);
document.body.appendChild(bottomSection);
// document.body.appendChild(createScreenshotButton);