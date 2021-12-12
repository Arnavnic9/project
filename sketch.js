var fighter1,fighter2
var ring
var blast
var shield
var rightArrow,leftArrow,rightArrow2,leftArrow2
var punchLogo1,punchLogo2
var hp1 = 100
var hp2 = 100
var border1,border2
var play = 1
var end = 0
var gameState = 1

function preload(){
 BgImg = loadImage("Background and ring.png")
 ShieldImg = loadImage("shield-removebg-preview.png")
 Fighter1Img = loadImage("fighter2img-1.png")
 Fighter2Img = loadImage("istockphoto-961303496-612x612-removebg-preview.png")
 BlastImg = loadImage("beam-removebg-preview.png")
 RightArrowImg = loadImage("right arrow.png")
 LeftArrowImg = loadImage("arrow-removebg-preview.png")
 PunchImg = loadImage("punch logo.png")

 
}

function setup(){
 createCanvas(1000,600)
  ring = createSprite(425,300,1000,600)
  ring.addImage("ring",BgImg)
  ring.scale = 1
  
  fighter1 = createSprite(160,500,100,100)
  fighter1.addImage("fighter1",Fighter1Img)
  fighter1.scale = 0.4
  
  fighter2 = createSprite(675,500,100,100)
  fighter2.addImage("fighter2",Fighter2Img)
  fighter2.scale = 0.4
  
  rightArrow = createSprite(175,275,10,10)
  rightArrow.addImage("rightArrow",RightArrowImg)
  rightArrow.scale = 0.15
  
  leftArrow = createSprite(80,275,10,10)
  leftArrow.addImage("leftArrow",LeftArrowImg)
  leftArrow.scale = 0.15
  
  rightArrow2 = createSprite(750,275,10,10)
  rightArrow2.addImage("rightArrow2",RightArrowImg)
  rightArrow2.scale = 0.15
  
  leftArrow2 = createSprite(655,275,10,10)
  leftArrow2.addImage("leftArrow2",LeftArrowImg)
  leftArrow2.scale = 0.15
  
  punchLogo1 = createSprite(127.5,220,10,10)
  punchLogo1.addImage("punchLogo1",PunchImg)
  punchLogo1.scale = 0.3
  
  punchLogo2 = createSprite(702.5,220,10,10)
  punchLogo2.addImage("punchLogo1",PunchImg)
  punchLogo2.scale = 0.3
  
  border1 = createSprite(80,150,5,1000)
  border2 = createSprite(780,150,5,1000)
  
  
}




function draw(){
  if(gameState === 1){
  if(mousePressedOver(rightArrow)){
    fighter1.x = fighter1.x+3
  }
  
    if(mousePressedOver(leftArrow)){
    fighter1.x = fighter1.x-3
  }
  
    if(mousePressedOver(rightArrow2)){
    fighter2.x = fighter2.x+3
  }
  
  
    if(mousePressedOver(leftArrow2)){
    fighter2.x = fighter2.x-3
  }
  
  border1.visible = false
  border2.visible = false
  
    if(fighter1.isTouching(fighter2)){
      hp2 = hp2-1
    }

      drawSprites();
  
  fighter1.bounceOff(border1)

  if(hp1<=0||hp2<=0){
    gameState = 0
  }
  console.log(gameState)
  }else if(gameState === 0){
    if(hp1<=0){
    text("Player 2 Wins",500,400)
    }else{text("Player 1 Wins",500,400)}
  }
  
  
  

  
 textSize(40)
fill("red")
text("HP :"+hp1,60,150)
  
   textSize(40)
fill("red")
text("HP :"+hp2,630,150)
  
  
 
}





