const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var ground;
var rock1;
var tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var chain;

function preload(){
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
	backgroundImg = loadImage("background.png");
}

function setup(){
	createCanvas(1280, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rock1 = new rock(320,225);
	chain = new SlingShot(rock1.body,{x:320 , y:225});
	mango1 = new mango(900,150,8);
	mango2 = new mango(950,120,10);
	mango3 = new mango(1000,100,7);
	mango4 = new mango(950,60,9);
	mango5 = new mango(1050,60,6);
	mango6 = new mango(1100,120,8);
	mango7 = new mango(1142,115,9);
	mango8 = new mango(982,28,7);
	mango9 = new mango(1040,116,6);
	mango10 = new mango(839,103,10);

	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(rock1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


function draw() {
	if (keyIsPressed === true) {
		chain.attach();
	  }

    rectMode(CENTER);
    background(backgroundImg);
    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);
	rock1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	collision(rock1,mango1);
	collision(rock1,mango2);
	collision(rock1,mango3);
	collision(rock1,mango4);
	collision(rock1,mango5);
	collision(rock1,mango6);
	collision(rock1,mango7);
	collision(rock1,mango8);
	collision(rock1,mango9);
	collision(rock1,mango10);

	
	
}
function collision(rock1, mango){
	mangoBodyPosition = mango.body.position
	rockBodyPosition = rock1.body.position
	
	var distance = dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
	if(distance <= mango.radius + rock1.r){
		Matter.Body.setStatic(mango.body,false);
	}
}