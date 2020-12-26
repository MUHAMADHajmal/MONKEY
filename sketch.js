
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("monkey",monkey_running); 
 monkey.scale=0.1 
  
 ground = createSprite(400,350,900,10); 
 ground.velocityX=-4; 
 ground.x=ground.width/2;
 console.log(ground.x); 
  
 obstacle = createSprite(400,310,10,10);
 obstacle.addImage("obstacle",obstacleImage);
 obstacle.scale=0.2; 
  obstacle.velocityX=-4;
  
  banana = createSprite(400,100,10,10);
  banana.addImage("banana",bananaImage);
  banana.scale=0.2;
  banana.velocityX=-3;
  
  score=0;
  
}

function draw(){

background('green');
  
  text("Score: "+ score, 50,50);
  
 if(ground.x<0){
    
    ground.x=ground.width/2;
   
    
    } 
  
  if(keyDown("space")){
     
     monkey.velocityY = -12;
     }
  
  if(obstacle.x < 0) {
     
   
    
    obstacle.x=400;
    obstacle.y=310;
    
   
    
     }
  
  if(banana.isTouching(monkey)){
     
     score=score+1;
    
    
     banana.x=400;
    banana.y=100;
     
     }
  
  if(banana.x < 0){
     
     banana.x=400;
     banana.y=100;    
     
     
     }
  
  
  
  if (obstacle.isTouching(monkey)){
     
     obstacle.x=400;
     obstacle.y=310;  
    
    
    
    
    score=score-1;
     
     }
  
  if(score < 0){
     
    
    banana.velocityX=0;
    obstacle.velocityX=0;
    
    text("game over",200,200);
    
    text("press space bar to restart",100,100);
    
    
    if(keyDown("space")){
       
       monkey.velocityY=0;
       
      score=0;
      
      banana.x=400;
      banana.y=100;
      
      
       
       }
    
    if(score === 0){

       obstacle.velocityX=-4;
      banana.velocityX=-3;
      
      
       }
    
    
    
    
    
    
     
     }
  
  
  
  
  
  
  if( obstacle.x === 400 && obstacle.y === 310){
     
    obstacle.velocityX=-4;
    
     }
  
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  monkey.collide(obstacle);
 
  
  
  drawSprites();


}






