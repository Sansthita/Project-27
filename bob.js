class Bob{
    constructor(x, y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 50, options);
        
        //this.image = loadImage('paper.png');
        World.add(world, this.body);
    }
   display(){
       var pos = this.body.position;
       push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill("red");
       ellipseMode(RADIUS);
       ellipse(0, 0, 50, 50);
       
       //image(this.image, 0, 0, 50, 50);
       pop();
       }

}