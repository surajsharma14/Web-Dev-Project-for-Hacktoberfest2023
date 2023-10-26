class Circle{
    private alpha: number;
    private radius: number;
    private x: number;
    private y: number;
    private vx: number;
    private vy: number;
    private context: CanvasRenderingContext2D;
    public color: string;

    constructor(context:CanvasRenderingContext2D, radius: number, vx:number, vy:number, initialx:number, initialy: number){
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
        this.x = initialx;
        this.y = initialy;
        this.context = context;
        this.alpha = 1;
        this.color = 'red';
    }

    draw(){
        var context = this.context;
        context.save();
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,2*Math.PI,true);
        context.fillStyle = this.color;
        context.globalAlpha = this.alpha;
        context.fill();
        context.restore();
        this.update();
    }

    private update(){
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.alpha *= 0.98;
    }

    get Alpha(){
        return (this.alpha);
    }
}

class Smoke{
    private container: {circle: Circle}[]=[];
    private context: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private no: number;
    private canvas: HTMLCanvasElement;
    public vxrange: number;
    public vymin: number;
    public vymax: number;
    public radiusmin: number;
    public radiusmax: number;
    public color: string;

    constructor(canvas:HTMLCanvasElement, context: CanvasRenderingContext2D, x: number, y: number, noofparticles:number){
        this.context = context;
        this.x = x;
        this.y = y;
        this.no = noofparticles;
        this.canvas = canvas;
        this.vxrange = 1; 
        this.vymin = 1; 
        this.vymax = 5; 
        this.radiusmin = 3; //minimum radius
        this.radiusmax = 15; // maximum radius
        this.color = 'white';
    }

    private random(max:number,min:number){
        return (Math.random()*(max-min)+min);
    }

    start(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.context.beginPath();
        this.context.rect(0,0,this.canvas.width,this.canvas.height);
        this.context.fillStyle = 'black';
        this.context.fill();
        this.context.save();
        this.context.translate(0,this.canvas.height);
        this.context.scale(1,-1);
        for(var i = 1; i <= this.no; i++){
            var vy = this.random(this.vymin,this.vymax);
            var vx = this.random(-this.vxrange,this.vxrange);
            var r = this.random(this.radiusmin,this.radiusmax);
            var circle = new Circle(this.context,r,vx,vy,this.x,this.y);
            circle.color = this.color;
            this.container.push({circle:circle});       
        }
        for(var i = 1; i < this.container.length; i++){
           this.container[i].circle.draw(); 
        } 

        this.context.restore();

        for(var i=0; i<this.container.length;i++){
            if(this.container[i].circle.Alpha<0.1){
                this.container.splice(i,1);
                i--;
            }
        }
    }
}