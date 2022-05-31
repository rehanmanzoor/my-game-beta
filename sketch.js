var ninja, ninja_collided, ninjajump , ninja_running
var bodygaurd , bodygaurdjump , bodygaurd_running
var spikes
var path, pathimg, invisibleGround 
var PLAY=1
var END=0
var gameState=1
var ninjaTimeout 




function preload(){
ninja_running = loadAnimation("ninja1.PNG","ninja2.PNG","ninja3.PNG","ninja4.PNG","ninja5.PNG","ninja6.PNG");
//bodygaurd = loadAnimation("Bodygaurd1.png","Bodygaurd2.png","Bodygaurd3.png","Bodygaurd4.png",
//"Bodygaurd5.png","Bodygaurd6.png" )
pathimg = loadImage("grasspath.PNG")
 
ninjajump = loadAnimation("ninjajump.PNG")
}

function setup() {
createCanvas(600,200)

var message = "This is a message";
 console.log(message)

 ninja = createSprite(50,130,20,50);
 ninja.addAnimation("running", ninja_running);
 ninja.addAnimation("jump", ninjajump)
 //ninja.addAnimation("collided", ninja_collided);
 ninja.scale= 0.8

 path = createSprite(320,175);
 path.addImage("pathway",pathimg);
 path.scale = 0.8
 path.velocityX= -4
  
 invisibleGround = createSprite(200,170,400,10);
 invisibleGround.visible = false;


 score= 0
 jumping = createGroup(); 
}

function draw() {
    background("lightblue");

    text("Score: "+ score, 500,50);
    
    if(path.x < 100 ){
        path.x = width/2
      } 

      score = score + Math.round(getFrameRate()/60);

      if(keyDown("space")&& ninja.y >= 100) {
        ninja.velocityY = -12;
      
  setTimeout(function(){ ninja.changeAnimation("jump",ninjajump)},2000);  
      }
      ninja.velocityY = ninja.velocityY + 0.8
//  //     if(keyWentUp("space")){
//         ninja.changeAnimation("running", ninja_running);
         
//       }

    ninja.collide(invisibleGround)
    drawSprites()
  
    
}

