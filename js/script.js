var degree1 = 0;
var looper;

var i = 0;

function move_bg() {
  i--;
  var bg = document.getElementById("buildings");
  bg.style.backgroundPosition = i + "px";
}
setInterval(move_bg, 20);

function rotateR(el, speed) {
  var right_leg = document.getElementById(el);
  right_leg.style.transitionDelay = "0.1s";
  right_leg.style.transform = "rotate(" + degree1 + "deg)";

  looper = setTimeout("rotateR('" + el + "'," + speed + ")", speed);
  degree1++;
  if (degree1 > 1) {
    degree1 = -3;
  }
}

var degree2 = 0;

function rotateL(el, speed) {
  var left_leg = document.getElementById(el);
  left_leg.style.transform = "rotate(" + degree2 + "deg)";

  looper2 = setTimeout("rotateL('" + el + "'," + speed + ")", speed);
  degree2--;
  if (degree2 < -1) {
    degree2 = 3;
  }
}

var degree3 = 0;

function moveG(el, speed) {
  var goggles = document.getElementById(el);

  goggles.style.transform = "rotate(" + degree3 + "deg)";
  looper3 = setTimeout("moveG('" + el + "'," + speed + ")", speed);
  degree3 -= 0.2;
  if (degree3 < -0.4) {
    degree3 = 0.2;
  }
}

function day() {
  document.body.style.backgroundColor = "rgba(248, 197, 103, 0.7)";
  document.getElementById("buildings").style.backgroundImage =
    "url(../images/Building3.png)";
}
function night() {
  document.body.style.backgroundColor = "rgb(14, 21, 65)";
  document.getElementById("buildings").style.backgroundImage =
    "url(../images/Building4.png)";
}
