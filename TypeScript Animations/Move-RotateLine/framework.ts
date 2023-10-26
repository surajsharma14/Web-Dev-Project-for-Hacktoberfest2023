namespace Geometry {
    export class Point {
        public x: number;
        public y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }
    export class Line {
        private _stpt: Point;
        private _endpt: Point;
        private _angle: number;
        private _length: number;
        private _fixedpoint: Point;
        public tofrolength: number = 0;
        private _motion: string = "forward";
        private context: CanvasRenderingContext2D;
        public color: string = "black";

        constructor(stpt: Point, endpt: Point, context: CanvasRenderingContext2D) {
            this._stpt = stpt;
            this._endpt = endpt;
            this.context = context;
            this._fixedpoint = new Point(stpt.x, stpt.y);
            this._length = this.length;
            this._angle = this.angle;
        }
        private get length() {
            let l = Math.sqrt(Math.pow(this._stpt.x - this._endpt.x, 2) + Math.pow(this._stpt.y - this._endpt.y, 2));
            return (l);
        }
        private get angle() {
            let ang = Math.atan2(this._stpt.y - this._endpt.y, this._stpt.x - this._endpt.x) * Math.PI / 180;
            return (ang);
        }
        draw() {
            this.context.beginPath();
            this.context.moveTo(this._stpt.x, this._stpt.y);
            this.context.lineTo(this._endpt.x, this._endpt.y);
            this.context.strokeStyle = this.color;
            this.context.lineWidth = 3;
            this.context.stroke();
        }
        // motion generation

        rotate() {
            this._angle++;
            this._endpt.x = this._stpt.x + this._length * Math.cos(this._angle * Math.PI / 180);
            this._endpt.y = this._stpt.y + this._length * Math.sin(this._angle * Math.PI / 180);
            this.rotateCheck();
        }
        //motion handling 
        private rotateCheck() {
            if (this._angle >= 360) {
                this._angle = 0;
            }
        }
        // motion generation 
        tofro() {
            if (this._motion == "forward") {
                this._stpt.x++;
            }
            else {
                this._stpt.x--;
            }
            this.tofrocheck();
        }
        // motion handling 
        private tofrocheck() {
            if (this._fixedpoint.x + this.tofrolength < this._stpt.x) {
                this._motion = "backward";
            }
            else if (this._fixedpoint.x - this.tofrolength > this._stpt.x) {
                this._motion = "forward";
            }
        }
    }
}