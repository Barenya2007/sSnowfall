const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload(){
  bg =loadImage("snow2.jpg");
  
  }


function setup() {
  var canvas = createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(50,50,35,35);
  snow2 = new Snow(100,50,35,35);
  snow3 = new Snow(150,50,35,35);
  snow4 = new Snow(200,50,35,35);
  snow5 = new Snow(250,50,35,35);
  snow6 = new Snow(300,50,35,35);
  snow7 = new Snow(350,50,35,35);
  snow8 = new Snow(400,50,35,35);
  snow9 = new Snow(450,50,35,35);
  snow10= new Snow(500,50,35,35);
  snow11= new Snow(550,50,35,35);
  snow12= new Snow(600,50,35,35);
  snow13= new Snow(650,50,35,35);
  snow14= new Snow(700,50,35,35);
  snow15= new Snow(750,50,35,35);
  
  snow16= new Snow(50,100,35,35);
  snow17= new Snow(100,100,35,35);
  snow18= new Snow(150,100,35,35);
  snow19= new Snow(200,100,35,35);
  snow20= new Snow(250,100,35,35);
  snow21= new Snow(300,100,35,35);
  snow22= new Snow(350,100,35,35);
  snow23= new Snow(400,100,35,35);
  snow24= new Snow(450,100,35,35);
  snow25= new Snow(500,100,35,35);
  snow26= new Snow(550,100,35,35);
  snow27= new Snow(600,100,35,35);
  snow28= new Snow(650,100,35,35);
  snow29= new Snow(700,100,35,35);
  snow30= new Snow(750,100,35,35);

  snow31= new Snow(50,150,35,35);
  snow32= new Snow(100,150,35,35);
  snow33= new Snow(150,150,35,35);
  snow34= new Snow(200,150,35,35);
  snow35= new Snow(250,150,35,35);
  snow36= new Snow(300,150,35,35);
  snow37= new Snow(350,150,35,35);
  snow38= new Snow(400,150,35,35);
  snow39= new Snow(450,150,35,35);
  snow40= new Snow(500,150,35,35);
  snow41= new Snow(550,150,35,35);
  snow42= new Snow(600,150,35,35);
  snow43= new Snow(650,150,35,35);
  snow44= new Snow(700,150,35,35);
  snow45= new Snow(750,150,35,35);

}

function draw() {
  background(bg);  
  Engine.update(engine)
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  snow16.display();
  snow17.display();
  snow18.display();
  snow19.display();
  snow20.display();
  snow21.display();
  snow22.display();
  snow23.display();
  snow24.display();
  snow25.display();
  snow26.display();
  snow27.display();
  snow28.display();
  snow29.display();
  snow30.display();
  snow31.display();
  snow32.display();
  snow33.display();
  snow34.display();
  snow35.display();
  snow36.display();
  snow37.display();
  snow38.display();
  snow39.display();
  snow40.display();
  snow41.display();
  snow42.display();
  snow43.display();
  snow44.display();
  snow45.display();
  

}