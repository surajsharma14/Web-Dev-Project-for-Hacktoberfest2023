class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
// Image
class Img {
    constructor(imageid, context, p1) {
        this.loaded = false;
        this.context = context;
        this.img1 = imageid;
        this.p1 = p1;
        this.isanim = false;
    }
    draw() {
        this.context.drawImage(this.img1, this.p1.x, this.p1.y);
    }
    move() {
        //Image Movement
        if (this.p1.x > 50) {
            this.p1.x--;
            this.isanim = true;
        }
        else {
            this.isanim = false;
        }
    }
}
//# sourceMappingURL=framework.js.map