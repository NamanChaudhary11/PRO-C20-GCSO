var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(1400,500);

  car=createSprite(30,200,30,50);
  car.shapeColor=color(0,255,127);
  car.velocityX= 40;
  
  wall=createSprite(1200,200,90,200);
  wall.shapeColor=color(0,0,0);

  deformation=0.5*speed*speed*weight/22500;

}

function draw() {
  background(255,99,71); 
  
  if(wall.x-car.x<(car.width+wall.width)/2){
   car.velocityX=0;

   if(deformation>180)
   {
     car.shapeColor=color(255,0,0);
     fill("red");
     stroke("orange");
     textSize(30);
     text("ITS DANGEROUS! SAFETY REQUIRED.",140,200);
   }
   if(deformation<180 && deformation>100)
   {
     car.shapeColor=color(230,230,0);
     fill("green");
     stroke("yellow");
     textSize(30);
     text("ITS BETTER..LESS SAFETY IS REQUIRED..",180,200);
   }
   if(deformation<100)
   {
     car.shapeColor=color(0,255,0);
     fill("orange");
     stroke("red");
     textSize(30);
     text("ITS BEST!!. NO PRIOR SAFETY  IS REQUIRED.. RIGHT TO GO :)",180,200);
   }
   }

   drawSprites();
}