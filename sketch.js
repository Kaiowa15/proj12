var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  
 var apple = Math.random(random(1,3));

 var orangeL = Math.random(random(1,3));

 var redL = Math.random(random(1,3));
 
   if (frameCount % 50 == 0) {
     if (apple == 1) {
       createApples();
     } else if (orangeL == 2) {
       createOrange();
     }else  if (redL == 2) {
       createRed();
     }
   }

   if (frameCount % 80 == 0) {
     if (apple == 1) {
       createApples();
     } else if (orangeL == 2) {
       createOrange();
     }
   }

   if (frameCount % 80 == 0) {
     if (apple == 1) {
       createApples();
     } else if (orangeL == 2) {
       createOrange();
     }else if (redL == 2) {
       createRed();
     }
   }

   if (frameCount % 80 === 0) {
     if (apple == 1) {
       createApples();
     }
      else if (orangeL == 2) {
       createOrange();
     }
     else if (redL == 2) {
       createRed();
     }
   }



}

function createApples() {
apple = createSprite(random,350,10, 10);
apple.addImage("apple",appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
apple.depth = garden.depth
apple.depth = apple.depth +1

}

function createOrange() {
orangeL = createSprite(random, 350, 10, 10);
orangeL.addImage("orange",orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
orangeL.depth = garden.depth
   orangeL.depth = orangeL.depth +1


}

function createRed() {
redL = createSprite(random,350, 10, 10);
redL.addImage("leafe",redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
  redL.depth = garden.depth
   redL.depth = redL.depth +1


}
