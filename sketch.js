
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = new Ground(600,10,120,20)
	
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	paper1=new Paper(200,300,20);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}



