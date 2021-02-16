var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  // track = loadImage("C:\Users\Admin\Downloads\CarRacingStage1.5-master\CarRacingStage1.5-master\images\track.png"); 
  // car1_img = loadImage("C:\Users\Admin\Downloads\CarRacingStage1.5-master\CarRacingStage1.5-master\images\car1.png"); 
  // car2_img = loadImage("\C:\Users\Admin\Downloads\CarRacingStage1.5-master\CarRacingStage1.5-master\images\car2.png"); 
  // car3_img = loadImage("C:\Users\Admin\Downloads\CarRacingStage1.5-master\CarRacingStage1.5-master\images\car3.png");
    //car4_img = loadImage("C:\Users\Admin\Downloads\CarRacingStage1.5-master\CarRacingStage1.5-master\images\car4.png");
    //ground = loadImage("C:\Users\Admin\Downloads\CarRacingStage1.5-master\CarRacingStage1.5-master\images\ground.png"); 
    track = loadImage("C:\Users\Admin\Downloads\CarRacingStage1.5-master\CarRacingStage1.5-master\images\track.png");
    car1_img = loadImage("image/car1.png");
    car2_img = loadImage("image/car2.png");
    car3_img = loadImage("image/car3.png");
    car4_img = loadImage("image/car4.png");
    ground = loadImage("image/ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play()
    
  }

  if(gameState === 2){
    game.end();
}
}
