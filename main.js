const keyframes = {
  background: [ 'green', 'blue' ]
}

const options = {
  id: "color-change",
  duration: 2000,
  delay: 1000,
  easing: "ease-in-out",
  iterations: Infinity,
  fill: "forwards"
}

function funcAnimate(){
const element = document.getElementById('animateid');
//element.animate(keyframes, options);
element.animate({ transform: 'scale(0)', opacity: 0 }, 300);
}
