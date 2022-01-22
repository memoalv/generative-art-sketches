const CANVAS_SIZE = 500;
const MARGIN = 25;
const FORWARD_SLASH_PROBABILITY = 0.8;
let LINE_SIZE = 20;
const OFFSET = 10;

function setup() {
  const REAL_CANVAS_SIZE = CANVAS_SIZE + MARGIN;
  createCanvas(REAL_CANVAS_SIZE, REAL_CANVAS_SIZE, SVG);
  background("#efefef");
}

let x = MARGIN;
let y = MARGIN;

function draw() {
  if (x + LINE_SIZE > CANVAS_SIZE) {
    x = MARGIN;
    y += OFFSET;
  }

  if (y + LINE_SIZE < CANVAS_SIZE) {
    if (random(0, 1) > FORWARD_SLASH_PROBABILITY) {
      line(x, y, x + LINE_SIZE, y + LINE_SIZE);
    } else {
      line(x, y + LINE_SIZE, x + LINE_SIZE, y);
    }
  }

  x += OFFSET;
}
