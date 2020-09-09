var bananaImage, obstacleImage;
var obstacleGroup, bananaGroup;
var scene;
var score;
var monkeyImage;



function preload() {
  var monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  scene = loadImage("jungle.jpg");
  
  var bananaImage = loadImage("banana.png");
  
  var obstacleImage = loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(400, 400);

   bckground = createSprite(200, 200, 400, 400)
   background.addImage("scenery", scene)
   background.velocityX = 5;

  ground = createSprite(200, 350, 400, 50);
  ground.visible = false;
  ground.velocityX = 5
  ground.x = ground.width / 2

  monkey = createSprite(10, 349, 50, 50)
  monkey.addAnimation("monkey_running", monkeyImage);

  bananaGroup = createGroup();
  stoneGroup = createGroup();

}

function draw() {
  background(220);

  Background.velocityX = 5;
  Bacground.x = scene.width / 2;




  drawSprites();
}

function banana() {
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400, 200, 50, 50);
    var rand = randomNumber(200, 250);
    banana.y = rand;
    banana.scale = 0.05;
    banana.velocityX = -12;
    banana.lifetime = 200;
    bananaGroup.add(banana);
    banana.addImage("banana", bananaImage);
  }

}

function createStone()
{
  if(World.frameCount % 300 === 0)
  {
   var stone = createSprite(400, 360, 50, 50);
   stone.scale = 0.15;
   stone.velocityX = -12;
   stone.lifetime = 200; 
   stoneGroup.add(stone);
   stone.addImage("stone", obstacleImage); 
    
  }   
} 