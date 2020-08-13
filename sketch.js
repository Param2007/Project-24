
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(400,680,800,20, {isStatic: true});
	World.add(world, ground);

	box1 = new Box(500,600,20,100);
	box2 = new Box(700,600,20,100);
	box3 = new Box(600,660,200,20);

	paper = new Paper(100,300,20);

	Engine.run(engine);
  
}


function draw() {

	background(0);
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x, ground.position.y, 800, 20);
  
  box1.display();
  box2.display();
  box3.display();

  paper.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 60, y: -60});
	}

}



