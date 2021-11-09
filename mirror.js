//  Declaring variables
let display;
let mirror;
let cameraW = 320;
let cameraH = 240;

let scaleToCam;
let size = 4;
const letters = [" ", "⋆", "✳", "✶", "✷", "✸", "✹"]; //symbols tha draw the image of the capture

function setup() {
  if (windowHeight <= windowWidth) {
    //size of the canvas
    display = createCanvas(windowWidth, windowHeight);
    scaleToCam = width / cameraW;
  } else {
    display = createCanvas(windowWidth, windo);
    scaleToCam = height / cameraH;
  }
  centerCanvas();

  mirror = createCapture(VIDEO);
  mirror.size(cameraW, cameraH);
  mirror.hide();

  textSize(size);
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  display.position(x, y);
}

function draw() {
  mirror.loadPixels();

  background(255);

  scale(scaleToCam);

  for (let y = 0; y < cameraH; y += size) {
    for (let x = 0; x < cameraW; x += size) {
      let i = (y * cameraW + x) * 4;
      let r = mirror.pixels[i];
      let g = mirror.pixels[i + 1];
      let b = mirror.pixels[i + 2];
      let ind = floor((1 - (r + g + b) / 765) * (letters.length - 1));
      fill(0, 255, 0);
      text(letters[ind], x, y);
    }
  }
}

function windowResized() {
  if (windowHeight <= windowWidth) {
    resizeCanvas(int(windowHeight * ratio), windowHeight);
  } else {
    resizeCanvas(windowWidth, int(windowHeight / ratio));
  }
}
