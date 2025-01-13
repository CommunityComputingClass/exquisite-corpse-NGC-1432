let colors = ["indigo","lavender","orange"]

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(115,28,122);
  eyeDalmatian(150,300);
  eyeByzantine(450,300);
}

function eyeSauron(x,y){
  fill("white")
  ellipse(x,y,250,125)
  fill(colors[2])
  ellipse(x,y,100,100)
  fill("black")
  ellipse(x,y,50,50)
  fill("white")
  ellipse(x-5,y-5,15,15)
}

function eyeDalmatian(x,y){
  fill("white")
  ellipse(x,y,250,125)
  fill(colors[1])
  ellipse(x,y,100,100)
  fill("black")
  ellipse(x,y,50,50)
  fill("white")
  ellipse(x-5,y-5,15,15)
}

function eyeByzantine(x,y){
  fill("white")
  ellipse(x,y,250,125)
  fill(colors[0])
  ellipse(x,y,100,100)
  fill("black")
  ellipse(x,y,50,50)
  fill("white")
  ellipse(x-5,y-5,15,15)
}