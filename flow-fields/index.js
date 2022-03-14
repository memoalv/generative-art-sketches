const CANVAS_SIZE = 700;
const MARGIN = 25;

const DENSITY = 40;

const points = [];
const mult = 0.006

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  angleMode(DEGREES);
  background(30);
  noiseDetail(1)

  const SPACE = width / DENSITY;

  for (let x = 0; x < width; x += SPACE) {
    for (let y = 0; y < height; y += SPACE) {
      const randomness = random(0, 10)
      const vector = createVector(x + randomness, y + randomness)
      points.push(vector);
    }
  }
}

function draw() {
  noStroke()

  for (let i = 0; i < points.length; i++) {
    const r = map(points[i].y, 0, width, 0, 100)
    const g = map(points[i].y, 0, width, 50, 200)
    const b = map(points[i].x, 0, width, 255, 255)
    fill(r, g, b)

    const lineNoise = noise(points[i].x * mult, points[i].y * mult);
    const angle = map(lineNoise, 0, 1, 0, 720)
    points[i].add(createVector(cos(angle), sin(angle)))

    ellipse(points[i].x, points[i].y, .5);
  }
}

