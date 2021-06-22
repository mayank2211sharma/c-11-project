var seaImage , sea ;
var shipImage , ship ;


function preload(){

  sea = loadImage("sea.png");
  ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  

}

function setup() {
    createCanvas(600, 200);



ship = createSprite(40,100,30,20);
ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
ship.scale = 0.1;
}
function draw() {
  background(sea);
  sea.x = sea.width /2;
  sea.velocityX = -4;  

  
  if (sea.x < 0){
    sea.x = sea.width/2;
  }
  drawSprites();
}
