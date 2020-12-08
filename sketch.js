const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Engine = Matter.Engine;
var engine,world;
var canvas;
var apprentice;
var gImg,bImg;
var merlin,mImg;
var bile,poison;
function preload()
{  
  bImg = loadImage("apprentice.png");
  gImg = loadImage("aprentice.png");
  mImg = loadImage("merlin.png");
  backImg = loadImage("background.jpg");
}

function setup() 
{
  canvas  = createCanvas(2000,560);
  engine = Engine.create();
  world = engine.world;
  apprentice = createSprite(400,300,10,10);
  apprentice.addImage("apprentice",bImg);
  merlin = createSprite(100,300,10,10);
  merlin.addImage("merlin",mImg);
  bile = new Bile(200,200);
  poison = new Poison(300,300);
  Engine.run(engine);
}


function draw() 
{
  background(backImg);
  bile.display();
  poison.display();
  drawSprites();
}