
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const gridContainer = document.createElement("div");
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";

const testFunction = () => console.log("hello, world");

/*

  generate "gridSquareContainer" and fill it with 16 "gridSquare" elements.
  push the "gridSquareContainer" into "gridContainer"

  each gridSquareContainer contains 16 gridSquare elements
  gridSquareContainer contains 16 gridSquareContainers

  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]
  [][][][][][][][][][][][][][][][]

*/

for (let i = 0; i < 16; ++i) {
  let gridSquareContainer = document.createElement("div");
  gridSquareContainer.style.flexDirection = "row";

  for (let j = 0; j < 16; ++j) {
    let gridSquare = document.createElement("div");

    gridSquare.style.boxSizing = "border-box";
    gridSquare.style.width = "20px";
    gridSquare.style.height = "20px";

    gridSquare.style.border = "2px solid gray";

    gridSquare.addEventListener("mouseover", testFunction);

    gridSquareContainer.appendChild(gridSquare);
  }

  gridContainer.appendChild(gridSquareContainer);
}

document.body.appendChild(gridContainer);