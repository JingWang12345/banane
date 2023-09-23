let c=document.getElementById('p5-canvas');
let ctx=c.getContext("2d");

let colors = ["#233D4D", "#FE7F2D", "#FCCA46", "#A1C181", "#619B8A"];
let particles = [];
let amount = 40;

function setup() {
  createCanvas(300, 300);
  noStroke();
  frameRate(20);
  let p = new Particle(random(width), random(height), random(colors));
  particles.push(p);
}

function draw() {
  background("#282846");
  for (let i = 0; i < particles.length; i++) {
    if (particles[i].lv < 0) {particles.splice(i, 1);}
    particles[i].update();
    particles[i].show();
  }
  if (particles.length < amount) {
    let p = new Particle(random(width), random(height), random(colors));
    particles.push(p);
  }
}

