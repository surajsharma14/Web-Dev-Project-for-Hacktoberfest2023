var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");

canvas.addEventListener("click", mouseclick, false);

// Variables
var rtpt = new Geometry.Point(750, 500);
var ltpt = new Geometry.Point(50, 500);
var rect = canvas.getBoundingClientRect();
var geo: string;
var circlecontainer: { circle: Geometry.Circle }[] = [];
var isanim: boolean = false;

function drawcircle() {
    geo = "draw";
}
function move() {
    geo = "move";
}

//Mouseclick Event
function mouseclick(e: MouseEvent) {
    if (geo == 'draw') {

        let c1 = new Geometry.Point(e.clientX - rect.x, e.clientY - rect.y);
        let vx = random(1, 5);
        let cir = new Geometry.Circle(c1, 25, rtpt, ltpt, vx, context);
        cir.draw();
        circlecontainer.push({ circle: cir });
    }
    else if (geo == 'move') {
        checkinside(e.clientX - rect.x, e.clientY - rect.y);
        if (!isanim) {
            anim();
        }
    }
}
function random(minvalue: number, maxvalue: number) {
    return (Math.random() * (maxvalue - minvalue) + minvalue)
}

function anim() {
    isanim = true;
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < circlecontainer.length; i++) {
        circlecontainer[i].circle.draw();
    }
    window.requestAnimationFrame(anim)
}

function checkinside(x: number, y: number) {
    for (let i = 0; i < circlecontainer.length; i++) {
        if (circlecontainer[i].circle.isinside(new Geometry.Point(x, y))) {
            circlecontainer[i].circle.move = true;
            break;
        }
    }
}