const canvas = document.querySelector('#canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


canvasContext.lineJoin = 'round';
canvasContext.lineCap = 'round';
canvasContext.lineWidth = 20;

let lastX = 0;
let lastY = 0;
// hsl hue goes from red to red in the rainbow.
let hue = 0;
let isDrawing = false;
let widthDirection = true;

const draw = (e) => {
    if(!isDrawing) return;
    // 100% saturation, 50% lightness
    canvasContext.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    canvasContext.beginPath();
    // start from
    canvasContext.moveTo(lastX, lastY);
    // go to
    canvasContext.lineTo(e.offsetX, e.offsetY);
    canvasContext.stroke();
    // update last x y on mouse move.
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    // Once we get to the hue max restart to 0
    if(hue >= 360)hue = 0;


    // If linewidth is in its limit flip the width direction.
    if(canvasContext.lineWidth >= 300 || canvasContext.lineWidth <= 1) {
        widthDirection = !widthDirection;
    }

    if(!widthDirection) {
        canvasContext.lineWidth--;
    } else {
        canvasContext.lineWidth++;
    }
}


 document.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // sets initial x y
    [lastX, lastY] = [e.offsetX, e.offsetY];
 });

 document.addEventListener('mousemove', draw);
 document.addEventListener('mouseup', () => isDrawing = false);
 document.addEventListener('mouseout', () => isDrawing = false);  