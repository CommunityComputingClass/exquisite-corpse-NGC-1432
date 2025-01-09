function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(115,28,122);
  eye(150,300);
  eye(450,300);
}

function eye(x,y){
  fill("white")
  ellipse(x,y,250,125)
  fill("lavender")
  ellipse(x,y,100,100)
  fill("black")
  ellipse(x,y,50,50)
  fill("white")
  ellipse(x-5,y-5,15,15)
}