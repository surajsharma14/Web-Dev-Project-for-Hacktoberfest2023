var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");
// Vaiables
var stpt = new Geometry.Point(400, 400);
var endpt = new Geometry.Point(500, 500);
var l1 = new Geometry.Line(stpt, endpt, context);
l1.draw();
var isanim: boolean = false;

function rotate() {
    isanim = true;
    anim();
}

function anim() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    l1.rotate();
    l1.tofrolength = 150;  //tofrolength
    l1.tofro();
    l1.draw();
    if (isanim) {
        window.requestAnimationFrame(anim);
    }
}
function stop1() {
    isanim = false;
}