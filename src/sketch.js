let i = 0;
let sliderRadius;
var count = 0;
let sliderSpeed;
const interval = 13;
let pMillis = 0;
let currentMillis;
let xsineinc = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderRadius = createSlider(20, 900, 256);
  sliderRadius.position(0, 100);
  sliderRadius.style('width', '100');
  sliderSpeed = createSlider(0.001, 0.5, 0.01, 0.001);
  sliderSpeed.position(0, 200);
  sliderSpeed.style('width', '100')


}



function draw() {
  background(40);


  translate(width / 4, height / 2);
  noFill();
  stroke(220);
  strokeWeight(3);

  ellipse(0, 0, sliderRadius.value(), sliderRadius.value());

  fill(220);

  i = i + sliderSpeed.value();
  if (i > TWO_PI) {
    i = 0
  }

  let x;
  let y;
  x = (sliderRadius.value() / 2) * cos(i)
  y = (sliderRadius.value() / 2) * sin(i)

  line(0, 0, -x, y);
  stroke(80, 114, 240);
  fill('rgba(220,220,220,0.5)')

  line(-x, 0, -x, y);
  stroke(240, 80, 80)
  line(0, 0, -x, 0);
  noFill();

  noStroke();
  fill(220);
  ellipse(-x, y, 10);


  push();
  rectMode(CENTER);
  noFill();
  stroke('rgba(220,220,220,0.3)');
  line(sliderRadius.value()*0.5+20,-sliderRadius.value()*0.5-20,sliderRadius.value()*0.5+20,sliderRadius.value()*0.5+20);
  pop();
  push();
  fill(80,114,240);
  stroke(80,114,240);
  ellipseMode(CENTER);
  ellipse(sliderRadius.value()*0.5+20,y,10);
  line(sliderRadius.value()*0.5+20,0,sliderRadius.value()*0.5+20,y);
  pop();

  push();
  stroke('rgba(220,220,220,0.3)');

  line(-sliderRadius.value()*0.5-20,sliderRadius.value()*0.5+20,sliderRadius.value()*0.5+20,sliderRadius.value()*0.5+20);
  fill(240,80,80);
  stroke(240,80,80);
  ellipseMode(CENTER);
  ellipse(-x,sliderRadius.value()*0.5+20,10);
  line(0,sliderRadius.value()*0.5+20,-x,sliderRadius.value()*0.5+20);
  pop();

  translate(-windowWidth * 0.25, -windowHeight * 0.5);
  push();
  textSize(20);
  noStroke();
  fill(220);
  text('Amplitude:', 0, 80);
  text('b:', 0, 180);
  push();
  fill('rgba(220,220,220,0.4)');
  rect(windowWidth - 400, 0, 400, 800);
  textAlign(CENTER);
  fill(220);
  text('Current Radius', windowWidth - 200, 100);
  text('Lenght A', windowWidth - 200, 200);
  text('Lenght B', windowWidth - 200, 300);
  text('Degrees', windowWidth - 200, 400);
  text(sliderRadius.value()/2, windowWidth - 200, 150);
  text(-x.toFixed(2), windowWidth - 200, 250);
  text(y.toFixed(2), windowWidth - 200, 350);
  pop();
  pop();
	push();

  let amp = ((sliderRadius.value()*0.5)/128).toFixed(2);

  function ampRound(num){
    if(num==1){
      return "";
    }
    else if(num == Math.round(num)){
      return Math.round(num);
    }
    else{
      return num;
    }
  }
  textSize(20);
  fill(240,80,80);
  ellipse(20,windowHeight*0.8,20);
  fill(80,114,240);
  ellipse(20, windowHeight*0.85,20,20);
  text('f(x)='+ ampRound(amp) +' sin('+ (sliderSpeed.value()*50).toFixed(2) +' * x+c)+d ',45, windowHeight*0.86);
  fill(240,80,80);
  text('f(x)='+ampRound(amp)+' cos('+ (sliderSpeed.value()*50).toFixed(2)+' * x+c)+d ',45, windowHeight*0.81);
c

  let xSine=sliderRadius.value()*0.5;
  translate(width/4, height/2)
  currentMillis = millis();
  if(currentMillis-pMillis >= interval){
    pMillis=currentMillis;
    xsineinc+=1;

  }
  fill(80,114,240)
  ellipse(xSine+xsineinc, y, 10);
}
