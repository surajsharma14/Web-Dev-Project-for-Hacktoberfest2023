class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

// Image
class Img {
    private img1: CanvasImageSource;
    private loaded: boolean = false;
    private context: CanvasRenderingContext2D;
    private p1: Point;
    public isanim: boolean;
    constructor(imageid: CanvasImageSource, context: CanvasRenderingContext2D, p1: Point) {
        this.context = context;
        this.img1 = imageid;
        this.p1=p1;
        this.isanim=false;
    }

    draw(){
        this.context.drawImage(this.img1,this.p1.x,this.p1.y);
    }
    move() {
        //Image Movement
        if(this.p1.x>50){
            this.p1.x--;
            this.isanim=true;
        }
        else{
            this.isanim=false;
        }
    }
}