var geometry;
(function (geometry) {
    class particle {
        constructor(context) {
            this.context = context;
            this.vx = 5;
            this.vy = 5;
            this.color = "#3885FB";
            this.radius = 4;
            this.x = Math.random() * 930 + 20;
            this.y = Math.random() * 200 + 40;
            this.yconst = this.y;
        }
        // Drawing Particles
        draw() {
            this.update();
            this.context.beginPath();
            this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.strokeStyle = this.color;
            this.context.lineWidth = 13;
            this.context.globalAlpha = 0.6;
            this.context.stroke();
        }
        update() {
            //reposition of particle
            if (this.x > 950) {
                this.x = 20;
            }
            //Movement of particle about x-axis
            this.x += this.vx * Math.random();
            var ang = Math.random() * 360 * Math.PI;
            //Movement of particle about y-axis
            this.y = this.yconst + this.vy * Math.sin(ang);
        }
    }
    geometry.particle = particle;
})(geometry || (geometry = {}));
//# sourceMappingURL=framework.js.map