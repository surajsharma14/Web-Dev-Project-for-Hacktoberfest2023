var i:number;
var canvas = <HTMLCanvasElement>document.getElementById("mycanvas");
var context:CanvasRenderingContext2D=canvas.getContext("2d");
var container: {circle: geometry.particle} []=[];
var animate=true; //Variables

// No. of particles
for(i=0;i<1000;i++){
    var particle = new geometry.particle(context);
    container.push({circle:particle});
}


function anim(){
    context.clearRect(0,0,window.innerWidth,window.innerHeight);

    for(i=0;i<1000;i++){
        container[i].circle.draw();
    }
    if(animate){
        window.requestAnimationFrame(anim);
    }
}
function Stop(){
    animate=false;
}
function Start(){
    animate=true;
    anim();
}