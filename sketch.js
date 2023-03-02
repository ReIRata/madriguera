let posX=40;
let posY = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 function draw (){
ellipse(posX, posY, 50,50);
ellipse(posY, posY, 50,50);
ellipse(posY, posX, 50,50);
posX = posX + 1;
posY = posY + 2;
if(posX == windowWidth){
posX = 40;
}
if(posY == windowHeight){
posY = 40;
  }
}
