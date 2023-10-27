var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
// Variables
var stpt = new Curve.Point(100, 300);
var cir = new Curve.Circle(stpt, 10, context);
var rect = new Curve.square(stpt, 10, context);
var sinecurve = new Curve.Sinecurve(stpt, 200, cir, context);
function anim() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //sinecurve
    sinecurve.draw();
    window.requestAnimationFrame(anim);
}
function start1() {
    anim();
}
//# sourceMappingURL=app.js.map