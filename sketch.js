
let moveX=110;
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
   background(255, 0, 200);
  
}
function mousePresed(){
  moveX=10;
}

function windowResized() {
  centerCanvas();
}
 
function draw() {
rect(random(120),random(220), random(255));
rect(mouseY, mouseX, 50, 60);
moveX=moveX+1;
 rect(50,50,20,20)
}

