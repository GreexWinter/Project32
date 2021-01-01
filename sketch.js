const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16, block17, block18;
var polygonObject;
var slingshot;
var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(550,300,325,20);
    stand2 = new Ground(1000,250,300,20);

    block1 = new Block(450,270,50,70);
    block2 = new Block(500,270,50,70);
    block3 = new Block(550,270,50,70);
    block4 = new Block(600,270,50,70);
    block5 = new Block(650,270,50,70);
    
    block6 = new Block(500,200,50,70);
    block7 = new Block(550,200,50,70);
    block8 = new Block(600,200,50,70);

    block9 = new Block(550,130,50,70);

    block10 = new Block(900,200,50,70);
    block11 = new Block(950,200,50,70);
    block12 = new Block(1000,200,50,70);
    block13 = new Block(1050,200,50,70);
    block14 = new Block(1100,200,50,70);

    block15 = new Block(950,130,50,70);
    block16 = new Block(1000,130,50,70);
    block17 = new Block(1050,130,50,70);

    block18 = new Block(1000,80,50,70);

    polygonObject = new Polygon();

    slingshot = new Slingshot(polygonObject.body,{x:120, y: 200});
}

function draw(){
    background("black");
    Engine.update(engine);

    fill("Red");
    textSize(30);
    text("Drag the polygon to release it!", 400, 50);

    fill("Green");
    text("Score: "+score,20,50);
    
    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();
   
    block9.display();

    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    block15.display();
    block16.display();
    block17.display();

    block18.display();

    polygonObject.display();

    slingshot.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();

    block6.score();
    block7.score();
    block8.score();
   
    block9.score();

    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();

    block15.score();
    block16.score();
    block17.score();

    block18.score();
}

function mouseDragged(){
    Matter.Body.setPosition(polygonObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygonObject.body, {x: 70, y: 200});
    }
}