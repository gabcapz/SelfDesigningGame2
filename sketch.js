var player;

function preload(){
  tomStartImage = loadAnimation("images/walkingBack.png");
  tom_running = loadAnimation("images/walkingBack2.png", "images/walkingFront.png");
  tomEndImage = loadAnimation("images/walkingFront2.png");

  backImage = loadAnimation("images/walkingLeftSide.png");

  // jerryImage = loadAnimation("images/jerryOne.png");
  // jerryTeasing = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
  // jerryEndImage = loadAnimation("images/jerryFour.png");
}

function setup(){
createCanvas(1200, 600);

player = createSprite(500, 500, 50, 50);
player.addAnimation("walking", tomStartImage);

}

function draw(){
  background("white");

  if(keyDown(UP_ARROW)){
    player.y -= 2;
    player.addAnimation("walkingBack", tom_running);
  }

  if(keyDown(DOWN_ARROW)){
    player.y += 2;
    // player.addAnimation("walking", walkingFrontImage);
  }

  if(keyDown(LEFT_ARROW)){
    player.x -= 2;
    // player.addAnimation("walking", walkingLeftImage);
  }

  if(keyDown(RIGHT_ARROW)){
    player.x += 2;
    // player.addAnimation("walking", walkingRightImage);
  }

  drawSprites();
}