var bananaImage, obstacleImage;
var obstacleGroup, bananaGroup;
var background;
var score;
var monkeyImage;


function preload()
{
 var monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  background = loadImage("jungle.jpg");
}

function setup() 
{
  createCanvas(400, 400);
  
  Background = createSprite(200,200,400,400)
  Background.addImage("scenery", background)
  Background.velocityX = 5;
  
  ground = createSprite(200,350,400,50);  
  ground.visible = false;
  ground.velocityX = 5
  ground.x = ground.width/2
  
  monkey = createSprite(10,349,50,50)
  monkey.addAnimation("monkey_running", monkeyImage);
  
}

function draw() 
{
  background(220);
  
  Background.velocityX = 5;
  Bacground.x = background.width/2;
  
  
  
  
  drawSprites();
}