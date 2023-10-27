var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
canvas.addEventListener("click", mouseclick, false);
// Variables
var rtpt = new Geometry.Point(750, 500);
var ltpt = new Geometry.Point(50, 500);
var rect = canvas.getBoundingClientRect();
var geo;
var circlecontainer = [];
var isanim = false;
function drawcircle() {
    geo = "draw";
}
function move() {
    geo = "move";
}
//Mouseclick Event
function mouseclick(e) {
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
function random(minvalue, maxvalue) {
    return (Math.random() * (maxvalue - minvalue) + minvalue);
}
function anim() {
    isanim = true;
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < circlecontainer.length; i++) {
        circlecontainer[i].circle.draw();
    }
    window.requestAnimationFrame(anim);
}
function checkinside(x, y) {
    for (let i = 0; i < circlecontainer.length; i++) {
        if (circlecontainer[i].circle.isinside(new Geometry.Point(x, y))) {
            circlecontainer[i].circle.move = true;
            break;
        }
    }
}
//# sourceMappingURL=app.js.map