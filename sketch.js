var ball,paddle,ballimg,paddleimg;

function preload() {
  ballimg = loadImage("ball.png");
  paddleimg = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(60,200,20,20);
  ball.addImage('ball',ballimg); 
  ball.velocityX = 10;  
  paddle = createSprite(350,200,20,100);
  paddle.addImage("paddle",paddleimg)
}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);

  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20;
  }
  explosion();
  
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

