const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  block = new Ground(999,250,1,500);

  hexagon = new Hexagon(100,315,40);

  rope = new Rope(hexagon.body,{x:100,y:280});

  ground = new Ground(500,490,1000,10);

  stack1 = new Ground(560,300,150,10);
  stack2 = new Ground(845,150,150,10);

  
  box1 = new Box1(520,280,25,30);
  box2 = new Box1(545,280,25,30);
  box3 = new Box1(570,280,25,30);
  box4 = new Box1(595,280,25,30);
  box5 = new Box2(532.5,250,25,30);
  box6 = new Box2(557.5,250,25,30);
  box7 = new Box2(582.5,250,25,30);
  box8 = new Box3(545,220,25,30);
  box9 = new Box3(570,220,25,30);
  box10 = new Box4(557.5,190,25,30);
  box11 = new Box1(805,130,25,30);
  box12 = new Box1(830,130,25,30);
  box13 = new Box1(855,130,25,30);
  box14 = new Box1(880,130,25,30);
  box15 = new Box2(817.5,100,25,30);
  box16 = new Box2(842.5,100,25,30);
  box17 = new Box2(867.5,100,25,30);
  box18 = new Box3(830,80,25,30);
  box19 = new Box3(855,80,25,30);
  box20 = new Box4(842.5,50,25,30);
  //console.log(box1);
}

function draw() {
  background(30,0,30);  

  Engine.update(engine);

  ground.display();

  stack1.display();
  stack2.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  rope.display();

  hexagon.display();

  text(mouseX + ":" + mouseY,900,50);
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed() {
  if (keyCode === 32) {
      rope.attach(hexagon.body);
  }
}