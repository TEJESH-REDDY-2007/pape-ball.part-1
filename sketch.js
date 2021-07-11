
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1110, 400);


	engine = Engine.create();
	world = engine.world;

	bin1 = new Bin(1000, 315, 10, 100);
	bin2 = new Bin (948, 370, 100, 10);
	bin3 = new Bin (898, 315, 10, 100);
	
  ball = new Ball(100, 370, 7, PI/2);
	
  ground = new Ground(550, 380, 1119, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  

  //force.x+=x:5, force.x+=y:-5

  bin1.display();
  bin2.display();
  bin3.display();

  ball.display();
  
  ground.display();

  drawSprites();
}

function keyPressed() {
   if (keyCode === UP_ARROW) { 
     Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85}); 
    } 
  }
  
//function keyPressed() {
  //if (keyDown("UP_ARROW")) {
	  //Matter.Body.applyForce(ball.object, ball.object, ball.position,{x:5, y:-5})
    //}
//}