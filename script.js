
onclick = () => {

  let audio = new Audio("IWantYou.mp3");
  audio.play();
  let playbtn = document.getElementById('playbtn');
  playbtn.style.display = "none";
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
