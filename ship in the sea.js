var ship
var sea 
var seaImage
var shipImage
function preload(){
shipImage=loadImage("ship-1.png,ship-2.png,ship-3.png,ship-4.png")
seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship=createSprites(200,200,50,50);
  ship.addImage(shipImage)
  sea=createSprites(200,300,200,20);
  sea.addImage(seaImage)
  
  
}

function draw() {
  background("blue");
  sea.velocityX=-4;
  if(sea.x<0){
    sea.width=sea.width/2
  }
  console.log(ship.y)
 if(keyDown("space")){
  ship.velocityY = -10;
  ship.velocityX = 4
}

ship.velocityY = ship.velocityY + 0.5;

//stop trex from falling down
ship.collide(sea)
drawSprites();

}


  

