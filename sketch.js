var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var orange
var a1,a2,a3
var ground

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200,400,10);
garden.addImage(gardenImg);

ground = createSprite(200,400,400,10)
//ground.visible = false
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX
  edges= createEdgeSprites();
  
  rabbit.collide(edges);
    
 spawnApples1()
 spawnApples2()
 spawnApples3()

  drawSprites();
 
}
function spawnApples1(){
  if (frameCount%70===0){
  a1 = createSprite(100,50)
  a1.addImage(appleImg)
  a1.scale = 0.125
  a1.velocityY = 4
  a1.lifetime = 120
  
  
}

  
 
}
function spawnApples2(){
  if (frameCount%90===0){
  a2 = createSprite(200,0)
  a2.addImage(appleImg)
  a2.scale = 0.125
  a2.velocityY = 2
  a2.lifetime = 210
  }
  
}
function spawnApples3(){
  if (frameCount%50===0){
  a3 = createSprite(300,0)
  a3.addImage(appleImg)
  a3.scale = 0.125
  a3.velocityY = 3
  a3.lifetime = 140
  }
 

}

