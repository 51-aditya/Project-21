var bullet;
var speed;
var weight;
var stopper3;
var thickness;

function setup() {
  createCanvas(1250,600);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,375,50,7.5);
  bullet.shapeColor = color("white");

  stopper3 = createSprite(1200,375,thickness,150);
  stopper3.shapeColor = color(80,80,80);
  stopper3.width = thickness;
}

function draw() {
  background(0,0,0);
  bullet.velocityX = speed;
  drawSprites();
  
  if(stopper3.x-bullet.x < (bullet.width+stopper3.width)/2){
    bullet.velocityX = 0; 
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage > 10){
      stopper3.shapeColor = color(255,0,0);
    }
    if(damage < 10){
      stopper3.shapeColor = color(0,255,0);
    }
  }
}