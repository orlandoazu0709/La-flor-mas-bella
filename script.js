let clicked = false;

onclick = () => {
  if (!clicked) {
    clicked = true;
    let audio = new Audio("IWantYou.mp3");
    audio.play();
    let playbtn = document.getElementById('playbtn');
    playbtn.style.display = "none";
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    setTimeout(()=>{
      if(document.getElementById('heart').classList.contains('heart-hide')){
        document.getElementById('heart').classList.remove('heart-hide');
        document.getElementById('heart').classList.add('heart-show');
      }
    },122000);
  }
};

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

heartClick = () => {
  let color = console.log(randomColors());
  var styleElem = document.head.appendChild(document.createElement("style"));
  styleElem.innerHTML = "#heart:after {background: " + color + ";}";
}