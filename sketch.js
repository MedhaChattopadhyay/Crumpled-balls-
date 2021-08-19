
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(200,450,60)
ground=new Ground(800,690,1600,20)
dustbin=new Dustbin(1200,650)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
 
}


function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:130,y:-130})
	}
}
