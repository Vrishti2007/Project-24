
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     hammer = new Hammer(200,200,50,100)
     iron = new Iron(200,100,150,60)
     stone = new Stone(400,200,80,80)
     rubber = new Rubber(500,100,50)
     sand1 = new Sand(300,50,20)
     sand2 = new Sand(600,50,20)
     sand3 = new Sand(700,50,20)
     sand4 = new Sand(650,100,20)
     sand5 = new Sand(100,100,20)


   ground = Bodies.rectangle(400,680,800,20,{isStatic:true})
    World.add(world,ground)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();
rect(ground.position.x,ground.position.y,800,20)

  hammer.display();
  iron.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();

}



