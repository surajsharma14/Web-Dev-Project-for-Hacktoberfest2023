var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
// Adjusting Canvas Co-Ordinates
context.translate(0, canvas.height);
context.scale(1, -1);
// Variables
var pt = new Tank.Point(50, 50);
var tank = new Tank.Watertank(pt, 100, 300, context);
function anim() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    tank.draw();
    window.requestAnimationFrame(anim);
}
function start1() {
    anim();
}
//# sourceMappingURL=app.js.map