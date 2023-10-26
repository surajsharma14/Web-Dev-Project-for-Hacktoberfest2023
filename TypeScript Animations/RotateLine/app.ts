var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");
// Variables
var stpt = new Geometry.Point(300, 300);
var endpt = new Geometry.Point(400, 400);
var l1 = new Geometry.Line(stpt, endpt, context);
// Line Drawing
l1.draw();
var isanim: boolean = false;

function rotate() {
    isanim = true;
    anim();
}

function anim() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    l1.rotate();
    l1.draw();
    if (isanim) {
        window.requestAnimationFrame(anim);
    }
}

function stop1() {
    isanim = false;
}