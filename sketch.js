/**************************************************
mappingExample

by: JoshuaWilderOakley

overview:

a simple example of the mapping function in p5.js

----------------------------------------------------

notes:

***************************************************/


// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);  //setting for responsive page
  
 }


// Draw code goes here
function draw() {
   //syntax for mapping:
   // map(value, start1, start2, stop1, stop2);
  r =   map(mouseX, 0, windowWidth, 0, 255);  
  g =   map(mouseY, windowWidth, 0, 255, 0);  
  b =   map(mouseX, windowWidth, 0, 0, 255);

  background(r, g, b);
  
  drawEllipses ();

}

function drawEllipses (){

  fill(r);
  stroke(g);
  strokeWeight(26);
  ellipse(mouseX * 1.2, mouseY * 1.2, 200, 200);

  fill(g);
  stroke(b);
  strokeWeight(16);
  ellipse(mouseX, mouseY, 150, 150);

  fill(b);
  stroke(g);
  strokeWeight(6);
  ellipse(mouseX * 1.1, mouseY * 1.1, 100, 100); 

}
