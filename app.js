const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range =  document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;
const CURSOR_STYLE= "css-cursor";
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle =  INITIAL_COLOR;

ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function onMouseMove(event){
    const x=  event.offsetX;
    const y = event.offsetY;
    if(!painting){
        console.log("no painting!")
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
    else{
        console.log("painting!")
        ctx.lineTo(x,y)
        ctx.stroke();
    }

}


function startPainting(){
    painting = true;
}


function stopPainting(event){
    painting = false;
}


function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

}
function handleRangeChange(event){
    const brushSize = event.target.value;
    ctx.lineWidth = brushSize;
}
function handleModeClick(event){
    if(filling === true){
        filling = false;
        canvas.classList.remove(CURSOR_STYLE)
        mode.innerText ="Fill";
    }
    else{
        filling = true;
        canvas.classList.add(CURSOR_STYLE)
        mode.innerText ="paint"
    }
}

function handleCanvasCilck(event){
    if(filling){
        ctx.fillRect(0,0, canvas.width, canvas.height);
    }
}

function handleCm(event){
    event.preventDefault();
}


function handleSaveClick(event){
    const img = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = img;
    link.download = "PaintJS[EXPORT]😈";
    link.click();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click",handleCanvasCilck);
    canvas.addEventListener("contextmenu", handleCm);
}


// Array.from(colors).forEach(function(v){
//     v.addEventListener("click",handleColorClick);    
// })

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick
    )
);

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click",handleModeClick);
}
if(save){
    save.addEventListener("click", handleSaveClick);
}