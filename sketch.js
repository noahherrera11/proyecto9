var btn_red;
var btn_green;
var r = 0;
var g = 0; 
var b = 0;
var box;
function setup() {
  createCanvas(400,400);
  background(51);
  btn_red = createButton("RED");
  btn_red.position (100,50);
  btn_red.mousePressed(red_bg);
  btn_green = createButton("GREEN");
  btn_green.position (250,50);
  btn_green.mousePressed(green_bg);
}

function draw() 
{

  // escribir el código para cambiar el color del fondo 
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
  
  background(r,g,b);


  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

 if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }
  
  drawSprites();
}

function red_bg(){
  r = 255;
  g = 0;
  b = 0;
}
function green_bg(){
  r = 0;
  g = 255;
  b = 0;
}