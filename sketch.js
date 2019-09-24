function preload(){
  // put preload code here
}

function setup() {
createCanvas(windowWidth,windowHeight,);
angleMode(DEGREES);
frameRate(12);
background("black");
}

function draw() {
  translate(width/2, height/2);

  //bianco
  push()
  stroke("grey");
  strokeWeight(0.4);
  rotate(frameCount*-3);
  line(600,0,cos(frameCount*4)*600, sin(frameCount*2)*600);
  pop()

  push()
  stroke("azul");
  strokeWeight(0.5);
  rotate(frameCount*-3);
  line( 0,0,sin(frameCount*3)*100,cos(frameCount*3)*100,);
  line( 0,0,-sin(frameCount*3)*100,-cos(frameCount*3)*100,);
  pop()

  //iride
  push()
  stroke(lerpColor(color("blue"), color("green"), frameCount/180));
  strokeWeight(5);
  rotate(frameCount*3);
  line(50, 100, 150, 300);
  stroke(lerpColor(color("green"), color("pink"), frameCount/180));
  line(100, 100, 150, 300);
  stroke(lerpColor(color("pink"), color("blue"), frameCount/180));
  line(150, 100, 150, 300);
  pop()
}
