var box
var box1


function setup() {
  createCanvas(600,600);
  box=createSprite(200,200,20,20)
  box1=createSprite(500,500,90,90)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5
  }
 drawSprites()
}




