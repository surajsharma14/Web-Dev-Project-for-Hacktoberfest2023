class Circle {
    constructor(context, radius, vx, vy, initialx, initialy) {
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
        this.x = initialx;
        this.y = initialy;
        this.context = context;
        this.alpha = 1;
        this.color = 'red';
    }
    draw() {
        var context = this.context;
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        context.fillStyle = this.color;
        context.globalAlpha = this.alpha;
        context.fill();
        context.restore();
        this.update();
    }
    update() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.alpha *= 0.98;
    }
    get Alpha() {
        return (this.alpha);
    }
}
class Smoke {
    constructor(canvas, context, x, y, noofparticles) {
        this.container = [];
        this.context = context;
        this.x = x;
        this.y = y;
        this.no = noofparticles;
        this.canvas = canvas;
        this.vxrange = 1;
        this.vymin = 1;
        this.vymax = 5;
        this.radiusmin = 3; //minimum radius
        this.radiusmax = 15; // maximum radius
        this.color = 'white';
    }
    random(max, min) {
        return (Math.random() * (max - min) + min);
    }
    start() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
        this.context.rect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = 'black';
        this.context.fill();
        this.context.save();
        this.context.translate(0, this.canvas.height);
        this.context.scale(1, -1);
        for (var i = 1; i <= this.no; i++) {
            var vy = this.random(this.vymin, this.vymax);
            var vx = this.random(-this.vxrange, this.vxrange);
            var r = this.random(this.radiusmin, this.radiusmax);
            var circle = new Circle(this.context, r, vx, vy, this.x, this.y);
            circle.color = this.color;
            this.container.push({ circle: circle });
        }
        for (var i = 1; i < this.container.length; i++) {
            this.container[i].circle.draw();
        }
        this.context.restore();
        for (var i = 0; i < this.container.length; i++) {
            if (this.container[i].circle.Alpha < 0.1) {
                this.container.splice(i, 1);
                i--;
            }
        }
    }
}
//# sourceMappingURL=framework.js.map