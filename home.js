/* Assignment_04
"Animated DOM"
*/

//  Declaring variables
let button;
let w = 160;
let h = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton("ENTER");
  button.mouseClicked(buttonClicked);
  button.size(w, h);

  button.style("font-family", "monospace");
  button.style("font-size", "30px");
  button.style("background-color", "white");
  button.style("color", "#00ff00");
  cursor("help");
  button.mouseOver(function () {
    cursor("default");
  });
  button.mouseOut(function () {
    cursor("help");
  });
}

function draw() {
  background(255);
  button.position(mouseX - w / 2, mouseY - h / 2);
  button.position(windowWidth / 2 - w / 2, windowHeight / 2 - h / 2);
}

function buttonClicked() {
  window.open("index1.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
