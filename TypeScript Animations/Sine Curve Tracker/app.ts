var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");

// Variables
var stpt: Curve.Point = new Curve.Point(100, 300);
var cir: Curve.Circle = new Curve.Circle(stpt, 10, context);
var rect: Curve.square = new Curve.square(stpt, 10, context);

var sinecurve: Curve.Sinecurve = new Curve.Sinecurve(stpt, 200, cir, context);

function anim() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //sinecurve
    sinecurve.draw();
    window.requestAnimationFrame(anim)
}

function start1() {
    anim();
}