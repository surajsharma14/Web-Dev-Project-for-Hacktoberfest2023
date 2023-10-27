namespace Tank {
    export class Point {
        public x: number;
        public y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }
    export class Watertank {
        private startpt: Point;
        private width: number;
        private height: number;
        private context: CanvasRenderingContext2D;
        private l: number = 1;

        constructor(stpt: Point, w: number, h: number, context: CanvasRenderingContext2D) {
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
        private update() {
            this.l++;
            this.check();
        }
        private check() {
            if (this.l >= this.height) {
                this.l = 1;
            }
        }
    }
}