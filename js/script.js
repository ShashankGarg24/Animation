var head = Document.getElementById("head");
var r_leg = Document.getElementById("r_leg");
var l_leg = Document.getElementById("l_leg");
var r_hand = Document.getElementById("r_hand");
var l_hand = Document.getElementById("l_hand");

function assemble() {
  var body = document.getElementById("body");
  var count = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (count == 10) {
      clearInterval(id);
    } else {
      count++;
      body.x = 20 + "px";
      body.x = -20 + "px";
    }
  }
}
