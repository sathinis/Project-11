var path, pathIMG
var boy, boyIMG
var leftboundary, rightboundary
function preload(){
  //pre-load images
  pathIMG = loadImage("path.png")
  boyIMG = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathIMG);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(180,340,30,30);
  boy.addAnimation("running", boyIMG);
  boy.scale = 0.08;

  leftboundary = createSprite(0,0,100,800);
  rightboundary = createSprite(410,0,100,800);
  leftboundary.visible = false
  rightboundary.visible = false
}

function draw() {
  background(0);

  if(path.y > 400) {
    path.y = height/2;
  }
boy.x = World.mouseX
boy.collide(leftboundary);
boy.collide(rightboundary);
  drawSprites();
}
