var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  dog=loadImage("images/dogImg1.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,50,50);
  dog.addImage(dog);
   
  var foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogHappy);
}
  drawSprites();
  text("Foodremaining:",30,30)
  fill("white")
  stroke("black");
  textSize(5)
  text("NOTE:Press UP_ARROW to feed drago milk!",30,10);
  fill("white")
  stroke("black")
  textSize(5);
}
function readStock(data){
  foodS.data.val();
}
function writeStocks(){
  if(x<=0){
    x=0;
  }else{
    x=x+1;
  }
  
  database.ref('/').update({
    food:x
  })
}


