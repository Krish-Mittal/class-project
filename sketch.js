const eng=Matter.Engine;
const wor=Matter.World ;
const bod=Matter.Bodies;

var engine , world , ground1 , box1,box2;

function setup() {
  createCanvas(400,400);

  engine=eng.create();
  world=engine.world;
  
  box1=new box(200,300,50,50);
  box2=new box(240,100,50,100);

  ground1=new ground(50,200,400,20)

}
function draw() {
  background("yellow");
  eng.update(engine);
  
  box1.display(); 
  box2.display(); 
  ground1.display();
  drawSprites();
}
