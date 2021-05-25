const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var img;

function preload(){
  img = loadImage("polygon.png");

}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
    world = engine.world;


  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);



  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);



  bolck10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);


  block13 = new Block(600,140,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(500, 595, 1000, 15)


  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);

  player = new Player(50,200,30,30);

  ball = Bodies.circle(50,200,20, {density : 2});
  World.add(world,ball);

  sling = new Chain(this.ball,{x:150, y:400});

}

function draw() {
  background("black");
  Engine.update(engine);

  stroke ('white');
  textSize(32);
  text("Press Space To Reset", 150,100);

  //1st pyramid bottom layer
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  // second layer
  
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  //third layer
  bolck10.display();
  block11.display();
  block12.display();

  //fourth layer
  block13.display();


  // 2nd pyramid bottom layer
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  
  //second layer
  block19.display();
  block20.display();
  block21.display();

  //third layer
  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();
}




function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ball, {x: 150, y:400});
    sling.attach(ball);
  }
}

