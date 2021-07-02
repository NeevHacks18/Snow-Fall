const Engine = Matter.Engine;
const Bodies = Matter.Bodies
const World = Matter.World

var backgroundImg
var snow1,snow2,snow3,snow4,snow6

function preload(){
 backgroundImg = loadImage("snow1.jpg") 
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create()

  world = engine.world
  

  snow1 = new Snow(23, 20, 50)
  snow2 = new Snow(125,29,50)
  snow3 = new Snow(227,31,50)
  snow4 = new Snow(529,32,50)
  snow5 = new Snow(341,37,50)
  snow6= new Snow(733,39,50)
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)
  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()

}
