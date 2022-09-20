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

//Add New Floors & Floors Buttons
//To Add more than 10 floors Simply add next floor id and bottom value in object at line 59 
let num = 4;
var botmValue = [
  { "id": 5, "value": 520 },
  { "id": 6, "value": 620 },
  { "id": 7, "value": 720 },
  { "id": 8, "value": 820 },
  { "id": 9, "value": 920 },
  { "id": 10, "value": 1020 }
];
function onClickAddFloor() {
  //Add Floor
  const newImgTag = document.createElement("img");
  let element1 = document.getElementById('floorImg');
  newImgTag.src = "./images/Floor.png"
  if (num > 9) {
    element1.appendChild();
  }
  else {
    element1.appendChild(newImgTag);
  }
  //Add Button
  const newBtn = document.createElement("button");
  newBtn.className = "btns";
  let flrButton = document.getElementById("floorBtn")
  num = num + 1;
  var result = botmValue.find(item => item.id === num);
  let flrvalue = result.value;
  newBtn.innerHTML = num;
  newBtn.setAttribute("onclick", `liftMovement(${flrvalue})`)
  flrButton.appendChild(newBtn)
}

