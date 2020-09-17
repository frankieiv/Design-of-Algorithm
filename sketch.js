var penguin
var ice


function setup() {
  createCanvas(800,400);
  penguin = createSprite(400, 200, 50, 50);
  penguin.shapeColor='black'
  ice = createSprite(200,100,25,25)
  ice.shapeColor='lightblue'
}

function draw() {
  background(255,255,255);
  penguin.x=mouseX
  penguin.y=mouseY
  if(penguin.x-ice.x<penguin.width/2+ice.width/2
    &&penguin.y-ice.y<penguin.width/2+ice.width/2
    &&ice.x-penguin.x<penguin.width/2+ice.width/2
    &&ice.y-penguin.y<penguin.width/2+ice.width/2){
    penguin.shapeColor='pink'
    ice.shapeColor='pink'
  }
  else{
    penguin.shapeColor='black'
    ice.shapeColor='lightblue'
}

  drawSprites();
}