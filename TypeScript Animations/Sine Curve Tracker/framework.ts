namespace Curve {
    export class Point {
        private _x: number;
        private _y: number;
        constructor(x: number, y: number) {
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
    export class Geometry {
        private _stpt1: Point;
        constructor() {
        }
        set stpt(pt: Point) {
            this._stpt1 = pt;
        }
        draw() {

        }
    }

    //Circle
    export class Circle extends Geometry {
        private _cenpt: Point;
        private _radius: number;
        private context: CanvasRenderingContext2D;
        constructor(cenpt: Point, radius: number, context: CanvasRenderingContext2D) {
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
            this.context.strokeStyle = "black"
            this.context.stroke();
        }
        set stpt(pt: Point) {
            this._cenpt = pt;
        }
    }

    export class square extends Geometry {
        private _stpt: Point;
        private _length: number;
        private context: CanvasRenderingContext2D;
        constructor(stpt: Point, length: number, context: CanvasRenderingContext2D) {
            super();
            this._stpt = stpt;
            this._length = length;
            this.context = context;
        }
        draw() {
            this.context.beginPath();
            this.context.rect(this._stpt.x - this._length / 2, this._stpt.y - this._length / 2, this._length, this._length,);
            this.context.fillStyle = "blue";
            this.context.fill();
            this.context.strokeStyle = "black";
            this.context.stroke();
        }

        set stpt(pt: Point) {
            this._stpt = pt;
        }
    }

    //Sinecurve
    export class Sinecurve {
        private _datapoints: Point[] = [];
        private context: CanvasRenderingContext2D;
        private i: number = 0;
        private _geo: Geometry;
        private _amplitude: number;
        private _xscale: number = 1.5;
        private _stpt: Point;

        constructor(stpt: Point, amplitude: number, geometry: Geometry, context: CanvasRenderingContext2D, xscale?: number) {
            this.context = context;
            this._geo = geometry;
            this._amplitude = amplitude;
            this._stpt = stpt;

            if (typeof xscale != "undefined") {
                this._xscale = xscale;
            }
            this.calculate();
        }
        private calculate() {

            for (let i = 0; i <= 360; i++) {
                var y = this._amplitude * Math.sin(i * Math.PI / 180);
                var x = this._xscale * i;
                this._datapoints.push(new Point(x, y));
            }
        }
        draw() {
            this.context.save();
            this.context.translate(this._stpt.x, this._stpt.y);
            this.context.scale(1, -1); this.context.moveTo(this._datapoints[0].x, this._datapoints[0].y)
            this.context.beginPath();
            for (let i = 1; i <= 360; i++) {
                this.context.lineTo(this._datapoints[i].x, this._datapoints[i].y)
            }
            this.context.strokeStyle = "red";
            this.context.stroke();
            this._geo.stpt = new Point(this._datapoints[this.i].x, this._datapoints[this.i].y);
            this._geo.draw();
            this.context.restore();
            this.update();
        }
        private update() {
            this.i++;
            this.check();
        }
        private check() {
            if (this.i > 360) {
                this.i = 0;
            }
        }
    }

}

