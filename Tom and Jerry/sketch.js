var PLAY=1;
var END=0;
var gameState=PLAY;

var cat1,cat2,cat3,cat4,cat1Img,cat2Img,cat3Img,cat4Img;
var mouse1,mouse2,mouse3,mouse4,mouse1Img,mouse2Img,mouse3Img,mouse4Img;

var garden,gardenImg;

var bg,bgImg;

function preload() {
    
    mouseImg1 = loadImage("mouse1.png");
    catImg1 = loadImage("cat1.png");

    mouseAnimation =  loadAnimation("mouse2.png","mouse3.png");
    catAnimation = loadAnimation("cat2.png","cat3.png");

    gardenImg = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,667);
    //create all sprites.

    bg = createSprite(500,330);
    bg.addImage(gardenImg);

    mouse1 = createSprite(150,550);
    mouse1.addImage(mouseImg1);
    mouse1.scale=0.14;

    cat1 = createSprite(750,550);
    cat1.addImage(catImg1);
    cat1.scale=0.14;
    

}

function draw() {
    background("garden");//255
    //Write condition here to evalute if tom and jerry collide

   

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW)
  {
      mouse.addAnimation("mouseImg",mouseImg2);
      mouse.changeAnimation(mouseAnimation);
      mouse.frameDelay = 25;
  }

}
