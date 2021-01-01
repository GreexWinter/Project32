class Polygon{
    constructor(){
        var options = {
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(70,200,20,options);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var position = this.body.position;
        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
    }
}