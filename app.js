const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;


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


function onMousedown(event){
    //console.log(event)
    painting = true;
}




if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}