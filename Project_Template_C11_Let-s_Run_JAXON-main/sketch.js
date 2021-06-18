var bomb,coin,energyDrink,path,power,runner1,runner2
var bombImg,coinImg,energyDrinkImg,pathImg,powerImg,runner1Img,runner2Img


function preload(){
  bombImg.loadImage("bomb.png")
  coinImg.loadImage("coin.png")
  energyDrinkImg.loadImage("energyDrink.png")
  pathImg.loadImage("path.png")
  powerImg.loadImage("power.png")
  runner1Img.loadImage("runner-1.png")
  runner2Img.loadImage("runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  
  path=createSprite(0,200,10,100);
  path.addImage(pathImg);

  runner1=createSprite(0,200,10,100);
  runner1.addImage(runner1Img);

  runner2=createSprite(0,200,10,100);
  runner2.addImage(runner2Img);

}
function draw() {
  background(0);
  
  if (path.velocityY<0) {
  path.velocityY=path.velocityY/2 
  }
  



  drawprites();

}
