var FIXED, MOVING;

function setup() {
  createCanvas(displayWidth-20,displayHeight-50);
  FIXED = createSprite(width/2,height/2,20,20);
  MOVING = createSprite(600,300,15,15);
  FIXED.shapeColor="blue";
  MOVING.shapeColor="red";
  MOVING.velocityX=8;
  MOVING.velocityY=5;
}

function draw() {
  background("lightblue");  
  
  if((MOVING.x-FIXED.x<FIXED.width/2+MOVING.width/2)&&(FIXED.x-MOVING.x<FIXED.width/2+MOVING.width/2)&&(MOVING.y-FIXED.y<FIXED.height/2+MOVING.height/2)&&(FIXED.y-MOVING.y<FIXED.height/2+MOVING.height/2)){
    FIXED.shapeColor="green";
    MOVING.shapeColor="black";
    MOVING.velocityX=-8;
    MOVING.velocityY=-5;
  }
  else{
    FIXED.shapeColor="blue";
    MOVING.shapeColor="red";
  }

  drawSprites();
}