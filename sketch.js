var box1, box2, box3, paper, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	ground = new Ground(width/2, height-35, width,10);

	paper = new Paper(110,660,25);

	box1 = new Box(550,650,200,20);
	box2 = new Box(450,610,20,100);
	box3 =  new Box(650,610,20,100);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);


  background(0);
  
  drawSprites();

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();

  keyPressed();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x : 85, y : -85});
	}
	   
   }



