var Geometry;
(function (Geometry) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Geometry.Point = Point;
    class Circle {
        constructor(cenpt, radius, rightpt, leftpt, vx, context) {
            this.color = "green";
            this.motion = "forward";
            this.move = false;
            this._cenpt = cenpt;
            this._radius = radius;
            this._rightpt = rightpt;
            this._leftpt = leftpt;
            this.context = context;
            this._vx = vx;
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this._cenpt.x, this._cenpt.y, this._radius, 0, 2 * Math.PI, false);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.strokeStyle = 'black';
            this.context.stroke();
            if (this.move) {
                this.tofro();
            }
        }
        tofro() {
            if (this.motion == "forward") {
                this._cenpt.x += this._vx;
            }
            else {
                this._cenpt.x -= this._vx;
            }
            this.tofrocheck();
        }
        tofrocheck() {
            if (this.color == 'green') {
                this.color = 'yellow';
            }
            else {
                this.color = 'green';
            }
            if (this._cenpt.x > this._rightpt.x) {
                this.motion = 'backward';
            }
            else if (this._cenpt.x < this._leftpt.x) {
                this.motion = 'forward';
            }
        }
        isinside(pt) {
            let r = Math.sqrt(Math.pow(this._cenpt.x - pt.x, 2) + Math.pow(this._cenpt.y - pt.y, 2));
            if (r <= this._radius) {
                return (true);
            }
            else {
                return (false);
            }
        }
    }
    Geometry.Circle = Circle;
})(Geometry || (Geometry = {}));
//# sourceMappingURL=framework.js.map