const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particles = [];
var divisions = [];
var plinkos = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  for (var k = 0; k <= width; k = k + 80){

    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }
  
  for (var j = 40; j <= width; j = j + 50){
  
    plinkos.push(new Plinko(j, 75));
  }
  
  for (var j = 15; j <= width; j = j + 50){
  
    plinkos.push(new Plinko(j, 175));
  }
  
  for (var j = 40; j <= width; j = j + 50){
  
    plinkos.push(new Plinko(j, 275));
  }
  
  for (var j = 15; j <= width; j = j + 50){
  
    plinkos.push(new Plinko(j, 375));
  }
  
}

function draw() {
  background(0); 

  if(frameCount%90 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  Engine.update(engine);
  
  ground.display();

  for (var j = 0; j < particles.length; j++){

    particles[j].display();
  }

  for (var k = 0; k < plinkos.length; k++){

    plinkos[k].display();
  }

  for (var l = 0; l < divisions.length; l++){

    divisions[l].display();
  }

  drawSprites();
}