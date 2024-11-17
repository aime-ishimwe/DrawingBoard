const drawingBoard = document.getElementById("drawingBoard");
const ctx = drawingBoard.getContext("2d");

// Set canvas size
drawingBoard.width = window.innerWidth * 0.8;
drawingBoard.height = window.innerHeight * 0.6;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Control variables
const colorPicker = document.getElementById("colorPicker");
const lineWidth = document.getElementById("lineWidth");

drawingBoard.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

drawingBoard.addEventListener("mouseup", () => {
    isDrawing = false;
});

drawingBoard.addEventListener("mouseout", () => {
    isDrawing = false;
});

drawingBoard.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = lineWidth.value;
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
