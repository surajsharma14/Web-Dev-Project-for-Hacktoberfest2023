var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");
var p1: Point = new Point(600, 100); // variables
var imgid = <CanvasImageSource>document.getElementById("plane");
var i1 = new Img(imgid, context, p1);
//Button
var btn1: HTMLInputElement = document.createElement("input");
btn1.value = "Run Plane";
btn1.type = "button";
document.body.appendChild(btn1);
btn1.addEventListener("click", btn1click, false);

function btn1click() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    i1.draw();
    i1.move();
    if (i1.isanim) {
        window.requestAnimationFrame(btn1click);
    }
}