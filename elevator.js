var id = null;
var idD = null;
var pos = 0;
var prfm = 0;
let elem = document.getElementById("liftDiv");
let fDoor = document.getElementById("firstD");
let sDoor = document.getElementById("secondD");
let btn = document.getElementsByClassName("btns");


//Door Animation
function liftDoors(c) {
  clearInterval(idD);
  idD = setInterval(frame1, 5);
  function frame1() {
    if (prfm == c) {
      clearInterval(idD);
      setTimeout()
    }
    else {
      if (c == 0) { prfm-- }
      else { prfm++ }
      fDoor.style.width = prfm + 'px';
      sDoor.style.width = prfm + 'px';
    }
  }
}

//Lift Animation
function liftMovement(a) {
  for (let i = 0; i < btn.length; i++) {
    btn[i].disabled = true;
    btn[i].style.opacity = '0.4'
  }
  clearInterval(id);
  id = setInterval(frame, 10);
  liftDoors(43);
  function frame() {
    if (pos == a) {
      clearInterval(id);
      liftDoors(0);
      for (let i = 0; i < btn.length; i++) {
        btn[i].disabled = false;
        btn[i].style.opacity = '1';
      }
    }
    else {
      if (a == 0) { pos-- }
      else if (pos > a) { pos-- }
      else { pos++ }
      elem.style.bottom = pos + 'px';
    }
  }
}
