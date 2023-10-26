var i;
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var container = [];
var animate = true; //Variables
// No. of particles
for (i = 0; i < 1000; i++) {
    var particle = new geometry.particle(context);
    container.push({ circle: particle });
}
function anim() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (i = 0; i < 1000; i++) {
        container[i].circle.draw();
    }
    if (animate) {
        window.requestAnimationFrame(anim);
    }
}
function Stop() {
    animate = false;
}
function Start() {
    animate = true;
    anim();
}
//# sourceMappingURL=app.js.map