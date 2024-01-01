
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const gridContainer = document.createElement("div");
gridContainer.setAttribute("style", "display: flex; flexWrap: wrap");

const testFunction = () => console.log("hello, world");

for (let i = 0; i < 16; ++i) {
  let gridSquareContainer = document.createElement("div");
  gridSquareContainer.setAttribute("style", "flexDirection: row");

  for (let j = 0; j < 16; ++j) {
    let gridSquare = document.createElement("div");
    gridSquare.setAttribute("style", "boxSizing: border-box; width: 20px; height: 20px; border: 2px solid gray");
    gridSquare.addEventListener("mouseover", testFunction);

    gridSquareContainer.appendChild(gridSquare);
  }

  gridContainer.appendChild(gridSquareContainer);
}

document.body.appendChild(gridContainer);