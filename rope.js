class Rope{
    constructor(bodyA, pointB){
       
        
        var options={
            bodyA:bodyA,
            pointB:pointB,
          length:200,
          stiffness:0.004
        }
       
     this.pointB = pointB;  
       this.rope = Matter.Constraint.create(options);
       World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
       // var pointB = this.rope.bodyB.position;

        strokeWeight(2);
        stroke("blue")
       

        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
    }
}