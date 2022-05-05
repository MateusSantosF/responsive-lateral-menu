
var rightBar = document.getElementById("rightBar");
var main = document.getElementById("main");
var leftBar = document.getElementById("leftBar");

function leftBar(){
    leftBar.classList.toggle('toggleLeft');

    var main = document.getElementById("main");
    main.classList.toggle('toggleMain');
}


function leftButton(){
  leftBar.classList.toggle('toggleLeft');

  if(rightBar.classList.contains('toggleRight')){
    main.style.width = "100vw"
  }else{
    main.style.width = "80vw"
  }
}

function rightButton(){
  rightBar.classList.toggle('toggleRight');

  if(leftBar.classList.contains('toggleLeft')){
    main.style.width = "100vw"
  }else{
    main.style.width = "80vw"
  }

}
