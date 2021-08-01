const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options={
		
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	bob1 = Bodies.circle(320,120,22,ball_options);
  	World.add(world,bob1);
  	bob2 = Bodies.circle(330,120,22,ball_options);
  	World.add(world,bob2);
  	bob3 = Bodies.circle(340,120,22,ball_options);
  	World.add(world,bob3);
 	bob4 = Bodies.circle(350,120,22,ball_options);
 	World.add(world,bob4);
	bob5 = Bodies.circle(360,120,22,ball_options);
  	World.add(world,bob5);

	rope1=new rope(bob1,roof,-80,0);
	World.add(world,rope1);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes 
  
  push();
  strokeWeight(2);
  stroke(255);
  line(rope1.pointA.x,rope1.pointA.y,roof.position.x,roof.position.y)
  pop();
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,22);
  ellipse(bob2.position.x,bob2.position.y,22);
  ellipse(bob3.position.x,bob3.position.y,22);
  ellipse(bob4.position.x,bob4.position.y,22);
  ellipse(bob5.position.x,bob5.position.y,22);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
