var bullet, wall, thickness;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 40, 10);
  bullet.shapeColor=("#fff3e6");
  thickness=random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=("#fff3e6");
  speed = random(223, 321);
  weight = random(30, 52);
  bullet.velocityX=speed;
}

function draw() {
  background("#0f3057");  

  if(collided(bullet, wall)){
    bullet.velocityX=0;
    deformation=Math.round((0.5*weight*speed*speed)/(wall.width*wall.width*wall.width));
    console.log(deformation)

    if(deformation>=10){
      wall.shapeColor=("#91091e")
    }else if(deformation<10){
      wall.shapeColor=("#62959c")
  
    }
  }


  drawSprites();
}

function collided(bul, wal){
  bulletRight=bul.x+bul.width;
  wallLeft = wal.x+wal.width;
  if(bulletRight>=wallLeft){
    return true;
  }
  return false;
}