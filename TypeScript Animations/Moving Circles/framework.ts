namespace Geometry {

    export class Point {
        public x: number;
        public y: number;
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    export class Circle {
        private _cenpt: Point;
        private _radius: number;
        private _vx: number;
        private _rightpt: Point;
        private _leftpt: Point;
        private color: string = "green";
        private motion: string = "forward";
        private context: CanvasRenderingContext2D;
        public move: boolean = false;

        constructor(cenpt: Point, radius: number, rightpt: Point, leftpt: Point, vx: number, context: CanvasRenderingContext2D) {
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
        private tofro() {
            if (this.motion == "forward") {
                this._cenpt.x += this._vx;
            }
            else {
                this._cenpt.x -= this._vx;
            }
            this.tofrocheck();
        }
        private tofrocheck() {
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
                this.motion = 'forward'
            }
        }
        isinside(pt: Point): boolean {
            let r = Math.sqrt(Math.pow(this._cenpt.x - pt.x, 2) + Math.pow(this._cenpt.y - pt.y, 2));
            if (r <= this._radius) {
                return (true);
            }
            else {
                return (false);
            }
        }
    }
}