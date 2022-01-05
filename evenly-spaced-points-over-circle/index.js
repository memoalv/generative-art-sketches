const NUMBER_OF_POINTS = 10;

const drawCircle = ({ x, y }, diameter) => {
  stroke("black");
  strokeWeight(15);
  noFill();
  circle(x, y, diameter);
};

const drawPoints = (origin, diameter, points) => {
  stroke("red");
  strokeWeight(25);

  const spacing = 360 / points;
  const radius = diameter / 2;

  let angle = 0;
  for (let i = 0; i < points; i++) {
    const x = radius * Math.cos(radians(angle)) + origin.x;
    const y = radius * Math.sin(radians(angle)) + origin.y;
    point(x, y);
    angle = angle + spacing;
  }
};

function setup() {
  createCanvas(1360, 768);
  background("#efefef");
}

function draw() {
  const diameter = 512;
  const origin = {
    x: width / 2,
    y: height / 2,
  };

  drawCircle(origin, diameter);
  drawPoints(origin, diameter, NUMBER_OF_POINTS);
}
