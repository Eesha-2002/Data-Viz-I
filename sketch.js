let s=[20, 10, 5, 10, 20, 30, 40, 30];
let begin=0;
let myCol;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  
  frameRate(6);
  
  myCol =   [color(70, 100, 90, 70),
             color(15, 70, 30, 70),
             color(0, 90, 90, 70),
             color(30, 60, 40, 70)];
              
}

function draw() {
  background(0,0,100);
  
  noStroke();
  let i = begin; 
  for(c=0; c<8; c=c+1)
    
    {
      // fill(myCol[floor(random(4))]);
      
      fill(myCol[i%4]);
      
      ellipse(width/2, map(c, 0, 10,15, height*1.5), s[i]);
      
      ellipse(width/8, map(c, 0, 10,height*0.25, height*0.92), s[i]);
      
      ellipse(width*0.3, map(c, 0, 10,height*0.15, height*1.1), s[i]);
      
      ellipse(width*0.7, map(c, 0, 10,height*0.15, height*1.1), s[i]);
      
      ellipse(width*0.88, map(c, 0, 10,height*0.25, height*0.92), s[i]);
       
      
       i=i+1;
       if(i>=8)
         {
           i=0;
         }
    }
  
  begin=begin+1;
  if(begin>=8)
    {
      begin = 0;
    }
  
    
}