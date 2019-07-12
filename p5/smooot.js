// Project Javascript File 
var x = 900;
var ystart = 450;
var yDiff = 0;
var h = 209;
var s = 100;
var b = 0;
var stars = [];
var starCount = 200;


function setup() {
createCanvas (5000,900)
    colorMode(HSB);

}
  for (var i = 0; i <200; i++) {
        stars[i] = new Star();
    }
  
function draw() {
   background(h,s,b);
    
    yDiff = yDiff + 1;
    yDiff = yDiff % 500;
    b = b + 0.2;
    b = b % 100;
    
    noStroke();
fill ("yellow");
ellipse(x, ystart - yDiff, 400);


 
    }

        
    
function mousePressed() {
   b=250;
 
yDiff=380
    fill("yellow");
noLoop();
    textAlign(CENTER);
    text("SOLUTION", 900,750);
    fill("white");
    textSize(42);
}



function keyPressed() {
      background(0);
        
        noStroke();
    
fill("white");
    
   
ellipse(x, ystart - yDiff, 400);
      textAlign(CENTER);
    text("SOLUTION",900,750);
    fill("white");
         textSize(42);
     }
    
    
    




function Star() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.draw = function() {
        color(255);
        ellipse(this.x, this.y, 2);
           
}

}
