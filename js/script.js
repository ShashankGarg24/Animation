var degree = 0;
var looper;

function rotateR(el, speed) {
  var right_leg = document.getElementById(el);
  right_leg.style.transitionDelay = "0.1s";
  right_leg.style.transform = "rotate(" + degree + "deg)";
  right_leg.style.transformOrigin = "240 500";

  looper = setTimeout("rotateR('" + el + "'," + speed + ")", speed);
  degree++;
  if (degree > 3) {
    degree = 0.5;
  }
}

var degree2 = 0;
var looper2;

function rotateL(el, speed) {
  var left_leg = document.getElementById(el);

  left_leg.style.transform = "rotate(" + degree2 + "deg)";
  left_leg.style.transformOrigin = "240 500";

  looper2 = setTimeout("rotateL('" + el + "'," + speed + ")", speed);
  degree2--;
  if (degree2 < -2) {
    degree2 = 2;
  }
}

var degree3 = 0;
var looper3;
function moveG(el, speed) {
  var goggles = document.getElementById(el);

  goggles.style.transform = "rotate(" + degree3 + "deg)";
  looper3 = setTimeout("moveG('" + el + "'," + speed + ")", speed);
  degree3 -= 0.2;
  if (degree3 < -0.4) {
    degree3 = 0.2;
  }
}
