//setting my variables

//BALL
var ballX;
var ballY;
var ballWidth = 10;
var ballHeight = 10;
var ballSpeed = 5;
var ballDirectionX = 1;
var ballDirectionY = 1;


//paddles

//left position
var p1X = 20;
var p1Y = 300;

//right position
var p2X = 860;
var p2Y = 250;

var playerWidth = 20;
var playerHeight = 100;

var pSpeed = 5;



//scoreboard
var p1Score = 0;
var p2Score = 0;





function setup() {
  createCanvas(900, 500);

ellipseMode(CENTER);
ballX = width/2;
ballY = height/2;
}

textAlign(CENTER);



function draw() {
  background(0);
 
  //ball
  fill(255);
  ellipse(ballX, ballY, ballWidth, ballHeight);
 
  //ball movement
  ballX = ballX + (ballDirectionX*ballSpeed);// X-axis movement
  ballY = ballY + (ballDirectionY*ballSpeed);// Y-Axis movement
 
  //wall collision
  if(ballY >= height){
    //hit botton wall
    ballDirectionY = ballDirectionY*-1;//change direction off bottom
  }
   
    if(ballY <= 0){
    //hit botton wall
    ballDirectionY = ballDirectionY*-1;//change direction off bottom
   
  }
 
 
 
  //paddle draw and move
  //left Paddle
  rect(p1X, mouseY, playerWidth, playerHeight); //
 
 
  //right Paddle
  rect(p2X, mouseY, playerWidth, playerHeight);
 
 
  //paddle collision
  //left paddle
  if(ballX >= p1X-10 && ballX <= p1X+10 && ballY >= mouseY && ballY <= mouseY+100){
   
    ballDirectionX = ballDirectionX*-1;
  }
 
  //right paddle
  if(ballX >= p2X-10 && ballX <= p2X+10 && ballY >= mouseY && ballY <= mouseY+100){
   
    ballDirectionX = ballDirectionX*-1;
  }
 
 
  //scoreboard
  textSize(15);
  text(p1Score, 400, 25);
  text(p2Score, 500, 25);
 
  if (ballX <=0) {
    //off left wall - p1 missed
    p2Score = p2Score+1;//add point
    ballX = width/2;
    ballY = height/2;
   
  }
 
  if (ballX >= width) {
    //off left wall - p1 missed
    p1Score = p1Score+1;//add point
    ballX = width/2;
    ballY = height/2;
   
  }
 
 
 
 
 
  //RIGHT player keyboard ctrl
  function keyTyped(){
    if(key == 'w' && keyIsPressed){
      p1Y = p1Y-pSpeed;
    }
   
    if(key == 's' && keyIsPressed){
      p1Y = p1Y+pSpeed;
    }
  }
 
  }