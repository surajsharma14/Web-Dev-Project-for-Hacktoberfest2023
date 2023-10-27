var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");  //HTMLCanvasElement
var context: CanvasRenderingContext2D = canvas.getContext('2d');
var smoke = new Smoke(canvas, context, 250, 0, 20); //smoke

smoke.color = 'white'; 
runsmoke();

function runsmoke() {
    smoke.start();
    window.requestAnimationFrame(runsmoke);
}