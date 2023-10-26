var Tank;
(function (Tank) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Tank.Point = Point;
    class Watertank {
        constructor(stpt, w, h, context) {
            this.l = 1;
            this.startpt = stpt;
            this.width = w;
            this.height = h;
            this.context = context;
        }
        draw() {
            this.context.beginPath();
            this.context.rect(this.startpt.x, this.startpt.y, this.width, this.height);
            this.context.strokeStyle = "black";
            this.context.stroke();
            this.context.beginPath();
            this.context.rect(this.startpt.x + 1, this.startpt.y + 1, this.width - 1, this.l);
            this.context.fillStyle = "blue";
            this.context.fill();
            this.update();
        }
        update() {
            this.l++;
            this.check();
        }
        check() {
            if (this.l >= this.height) {
                this.l = 1;
            }
        }
    }
    Tank.Watertank = Watertank;
})(Tank || (Tank = {}));
//# sourceMappingURL=framework.js.map