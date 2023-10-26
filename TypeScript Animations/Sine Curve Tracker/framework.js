var Curve;
(function (Curve) {
    class Point {
        constructor(x, y) {
            this._y = y;
            this._x = x;
        }
        get x() {
            return (this._x);
        }
        get y() {
            return (this._y);
        }
    }
    Curve.Point = Point;
    class Geometry {
        constructor() {
        }
        set stpt(pt) {
            this._stpt1 = pt;
        }
        draw() {
        }
    }
    Curve.Geometry = Geometry;
    //Circle
    class Circle extends Geometry {
        constructor(cenpt, radius, context) {
            super();
            this._cenpt = cenpt;
            this._radius = radius;
            this.context = context;
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this._cenpt.x, this._cenpt.y, this._radius, 0, 2 * Math.PI, false);
            this.context.fillStyle = "blue";
            this.context.fill();
            this.context.strokeStyle = "black";
            this.context.stroke();
        }
        set stpt(pt) {
            this._cenpt = pt;
        }
    }
    Curve.Circle = Circle;
    class square extends Geometry {
        constructor(stpt, length, context) {
            super();
            this._stpt = stpt;
            this._length = length;
            this.context = context;
        }
        draw() {
            this.context.beginPath();
            this.context.rect(this._stpt.x - this._length / 2, this._stpt.y - this._length / 2, this._length, this._length);
            this.context.fillStyle = "blue";
            this.context.fill();
            this.context.strokeStyle = "black";
            this.context.stroke();
        }
        set stpt(pt) {
            this._stpt = pt;
        }
    }
    Curve.square = square;
    //Sinecurve
    class Sinecurve {
        constructor(stpt, amplitude, geometry, context, xscale) {
            this._datapoints = [];
            this.i = 0;
            this._xscale = 1.5;
            this.context = context;
            this._geo = geometry;
            this._amplitude = amplitude;
            this._stpt = stpt;
            if (typeof xscale != "undefined") {
                this._xscale = xscale;
            }
            this.calculate();
        }
        calculate() {
            for (let i = 0; i <= 360; i++) {
                var y = this._amplitude * Math.sin(i * Math.PI / 180);
                var x = this._xscale * i;
                this._datapoints.push(new Point(x, y));
            }
        }
        draw() {
            this.context.save();
            this.context.translate(this._stpt.x, this._stpt.y);
            this.context.scale(1, -1);
            this.context.moveTo(this._datapoints[0].x, this._datapoints[0].y);
            this.context.beginPath();
            for (let i = 1; i <= 360; i++) {
                this.context.lineTo(this._datapoints[i].x, this._datapoints[i].y);
            }
            this.context.strokeStyle = "red";
            this.context.stroke();
            this._geo.stpt = new Point(this._datapoints[this.i].x, this._datapoints[this.i].y);
            this._geo.draw();
            this.context.restore();
            this.update();
        }
        update() {
            this.i++;
            this.check();
        }
        check() {
            if (this.i > 360) {
                this.i = 0;
            }
        }
    }
    Curve.Sinecurve = Sinecurve;
})(Curve || (Curve = {}));
//# sourceMappingURL=framework.js.map