var bullet,wall,speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(20,200,60,20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";


  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(0);
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    var D = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if(D>10){
      wall.shapeColor = "green";
    }
    if(D<10){
      wall.shapeColor = "red";
    }
  }
  drawSprites();
  
}