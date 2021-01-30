
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bobObject1 = new Bob(280, 400);
	 bobObject2 = new Bob(370, 400);
	 bobObject3 = new Bob(460, 400);
	 bobObject4 = new Bob(560, 400);
	 bobObject5 = new Bob(630, 400);
	 
	 roofObject = new Roof(700, 300, 570, 10);
	 rope1 = new Rope(bobObject1.body, {x:480, y:300});
	 rope2 = new Rope(bobObject2.body,{x: 570, y:300});
	 rope3 = new Rope(bobObject3.body, {x: 700, y:300});
	 rope4 = new Rope(bobObject4.body, {x: 820, y:300});
	 rope5 = new Rope(bobObject5.body, {x: 900, y:300});
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-150, y:-150});
}
if (keyCode === DOWN_ARROW){
	Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x:150, y:-150});
}
}

