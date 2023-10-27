var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");
// Adjusting Canvas Co-Ordinates
context.translate(0, canvas.height);
context.scale(1, -1);
// Variables
var pt: Tank.Point = new Tank.Point(50, 50);
var tank: Tank.Watertank = new Tank.Watertank(pt, 100, 300, context);

function anim() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    tank.draw();
    window.requestAnimationFrame(anim);
}

function start1() {
    anim();
}