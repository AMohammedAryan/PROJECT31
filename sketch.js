const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, treeImage;
var ground;
var stone, stoneImage;
var boyImage;
var mango1, mango2, mango3, mango4, mangoImage;
var constraint;

function preload()
{
	treeImage = loadImage("tree.png");
	stoneImage = loadImage("stone.png");
	boyImage = loadImage("boy.png");
	mangoImage = loadImage("mango.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground();

	stone = new Stone(105, 560);

	mango1 = new Mango(220, 130, 50);
	mango2 = new Mango(200, 1, 50);
	mango3 = new Mango(180, 30, 50);
	mango4 = new Mango(200, 50, 50);

	constraint = new Constraint(stone.body, {x:105, y:560});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  image(boyImage, 180, 625, 250, 250);

  image(treeImage, 600, 350, 600, 700);

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  if (detectCollision(stone.body, mango1.body)){

	Body.setStatic(mango1.body, false);
  }

  if (detectCollision(stone.body, mango2.body)){

	Body.setStatic(mango2.body, false);
  }

  if (detectCollision(stone.body, mango3.body)){

	Body.setStatic(mango3.body, false);
  }

  if (detectCollision(stone.body, mango4.body)){

	Body.setStatic(mango4.body, false);
  }
  
  drawSprites();
}

function mouseDragged(){

	Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){

	constraint.fly();
}

function keyPressed(){

	if(keyCode === 32){

		constraint.attach(stone.body);
	}
}

function detectCollision(body1, body2){

    if(body1.position.x - body2.position.x <= body1.width/2 + body2.width/2 || 
       body2.position.x - body1.position.x <= body1.width/2 + body2.width/2 ||
       body1.position.y  - body2.position.y <= body1.height/2 + body2.height/2 ||
       body2.position.y - body1.position.y <= body1.height/2 + body2.height/2){

        return true;
       }
}
