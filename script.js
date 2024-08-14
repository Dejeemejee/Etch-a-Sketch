const gridSide = 600;

/*let squarePerSide = 16;*/

const container = document.querySelector(".container");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
const eraser = document.querySelector("#eraser");
const rainbow = document.querySelector("#rainbow");

let colored = 

container.style.width = `${gridSide}px`
container.style.height = `${gridSide}px`

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`

function setBackgroundColor (e) {
    if (e.type === "mouseover") {
        e.target.style.backgroundColor = "black";
}
}

function random (number) {
     return Math.floor(Math.random() * (number + 1));
    }
    
function createGridCells (squarePerSide) {
    const numberOfSquares = (squarePerSide * squarePerSide);
    const widthOrHeight = `${(gridSide / squarePerSide) - 2}px`
    for (i =  0; i < (numberOfSquares); i++) {
        var gridSquares = document.createElement("div");
        gridSquares.style.width =  widthOrHeight;
        gridSquares.style.height = widthOrHeight;
        gridSquares.classList.add("box");
        container.appendChild(gridSquares);

        gridSquares.addEventListener("mouseover", (e) => setBackgroundColor(e));
            
     }
     
}

createGridCells(16);

function removeGridCells () {
    while(container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    }
}

slider.oninput = function () {
    let txt = `${this.value} x ${this.value} (Resolution)`;
    sliderValue.innerHTML = txt;
    console.log(txt);
    removeGridCells();
    createGridCells(this.value);
}

function clearSketch () {
    removeGridCells();
    createGridCells(slider.value);
}

function confirmClearSketch () {
    if(confirm("Your sketch will be deleted!")) 
      clearSketch();
}
eraser.addEventListener("click", confirmClearSketch);


    rainbow.addEventListener("click", () => {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach((box) =>  {
            box.addEventListener("mouseover", () => {
                const rndCol= 'rgb(' + random(255) + ',' + random(255) +',' + random(255) + ')';
                box.style.backgroundColor = rndCol;
            })
        })
    })

