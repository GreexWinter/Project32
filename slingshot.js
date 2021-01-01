class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.slingshot);
    }
    fly(){
        this.slingshot.bodyA = null;
    }
    attach(body){
        this.slingshot.bodyA = body;
    }
    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            stroke(0,255,0)
            strokeWeight(7);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }    
}