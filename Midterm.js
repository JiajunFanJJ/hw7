var BGMSound;
var hitSound;
var gameoverSound;

function preload() {
  BGMSound = loadSound("BGM.mp3");
  hitSound = loadSound("hit.wav");
  gameoverSound = loadSound("gameover.wav");
}

var ballsx = [30, 60, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550];
var ballsy = [0, -280, -400, -130, 0, -580, -385, -120, -300, -90, -430, -120];
var SpeedBall = 5;
var playert = 300;
var playerm = 305;
var playerl = 315;
var playerr = 305;
var playery = 440;
var playera1 =300;
var playera2 =325;

function setup() {
  createCanvas(600, 500);
  BGMSound.play();
  BGMSound.setLoop(true);
}

function draw() {
  background(235);

  textSize(30);
  text('Do Not Touch Me', 180, 420);
  
  //player body
  rect(playert, playery, 30, 20);
  rect(playerm, 460, 20, 20);
  rect(playerl, 480, 10, 30);
  rect(playerr, 480, 10, 30);
  rect(playera1, 460, 5, 20);
  rect(playera2, 460, 5, 20);

  //player move
  //A key or LEFT_ARROW
  if (keyIsDown(65) || keyIsDown(37)) {
    playert -= 10;
    playerm -= 10;
    playerl -= 10;
    playerr -= 10;
    playera1 -= 10;
    playera2 -= 10;
  }

  //D key or RIGHT_ARROW
  if (keyIsDown(68) || keyIsDown(39)) {
    playert += 10;
    playerm += 10;
    playerl += 10;
    playerr += 10;
    playera1 += 10;
    playera2 += 10;
  }

  //stay screen
  //left
  if (playert < 0) {
    playert = 0;
    playerm = 5;
    playerl = 5;
    playerr = 15;
    playera1 = 0;
    playera2 = 25;
  }
  //right
  if (playert > 570) {
    playert = 570;
    playerm = 575;
    playerl = 575;
    playerr = 585;
    playera1 = 570;
    playera2 = 595;
  }

  //draw balls
  for (var i = 0; i < ballsy.length; i++) {
    ellipse(ballsx[i], ballsy[i], 30);

    //falling speed
    if (ballsy[i] < 700) {
      ballsy[i] = ballsy[i] + SpeedBall + random(0, 10);
    }

    //reset y
    if (ballsy[i] > 699) {
      ballsy[i] = 0;
      pickRandom();
    }
  }
  //random x
  function pickRandom() {
    ballsx[i] = random(10, 590);
  }

  //game over
  if (dist(playert, playery, mouseX, mouseY) < 20) {
    background(235);
    textSize(60);
    text('Game over', 160, 250);
    hitSound.play();
    gameoverSound.play();
    noLoop();
    BGMSound.pause();
  }
}
