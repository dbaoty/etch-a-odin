
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const gridContainer = document.createElement("div");
gridContainer.setAttribute("style", "display: flex; flexWrap: wrap");

function testFunction() {
  console.log(this);
  this.setAttribute("style", "boxSizing: border-box; width: 20px; height: 20px; background-color: black; border: 1px solid black;")
}

for (let i = 0; i < 16; ++i) {
  let gridSquareContainer = document.createElement("div");
  gridSquareContainer.setAttribute("style", "flexDirection: row");

  for (let j = 0; j < 16; ++j) {
    let gridSquare = document.createElement("div");
    gridSquare.setAttribute("style", "boxSizing: border-box; width: 20px; height: 20px; border: 1px solid gray");
    gridSquare.addEventListener("mouseover", testFunction);

    gridSquareContainer.appendChild(gridSquare);
  }

  gridContainer.appendChild(gridSquareContainer);
}

document.body.appendChild(gridContainer);