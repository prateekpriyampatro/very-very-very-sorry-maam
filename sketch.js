const Bodies =Matter.Bodies;
const Constraint = Matter.Constraint;
const World= Matter.World;
const Engine =Matter.Engine;
var particles = [];
var plinkos  = [];
var divisions=[];
var divisionHeight = 300;
function setup() {
  createCanvas(800,400);
  for(var k=0;k<=innerWidth;k=k+80){
   divisions.push(new ground(k, height-divisionHeight/2,10,divisionHeight));
  }

}

function draw() {
  background(255,255,255);  
  drawSprites();
}