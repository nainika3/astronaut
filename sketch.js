var spaceship,astronaut;
var bg,sleep,brush,gym,eat,drink,move;


function preload(){
bg=loadImage("images/iss.png");
sleep=loadAnimation("images/sleep.png");
brush=loadAnimation("images/brush.png");
gym=loadAnimation("images/gym1","images/gym2");
eat=loadAnimation("images/eat1.png","images/eat2.png");
drink=loadAnimation("images/drink1.png","images/drink2.png");
move=loadAnimation("images/move.png","images/move1.png");
}

function setup() {
  createCanvas(400, 400);
spaceship=createSprite(200,200);
spaceship.addAnimation("bg",bg);

astronaut=createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;

text("Up Arrow=Brushing",295,35);
text("Down Arrow=Gymming",295,40);
text("Left Arrow=Eating",295,45);
text("Right Arrow=Bathing",295,50);
text("M key=Moving",295,55);

}

function draw() {
  background(220);
 
  createEdgeSprites();
astronaut.bounceOff(edges);

if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;

}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    
    }

    if(keyDown("m")){
      astronaut.addAnimation("moving",move);
      astronaut.changeAnimation("moving");
      astronaut.y=350;
      astronaut.velocityX=5;
      astronaut.velocityY=-5;
      
      }

  drawSprites();
}