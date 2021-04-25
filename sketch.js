const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var engine,world;
var land;
function setup() {
  createCanvas(800,400);
 
engine=Engine.create();
world=engine.world;


var options={isStatic:true}
land=Bodies.rectangle(350,310,800,100,options);
ball=Bodies.circle(370,54,10);

World.add(world,land)
World.add(world,ball)

}

function draw() {
 
  background("green");  
  text(mouseX+";"+mouseY,mouseX,mouseY)
Engine.update(engine);
rectMode(CENTER)
rect(land.position.x,land.position.y,800,100);
ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,10,10);
}