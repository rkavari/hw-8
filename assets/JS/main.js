/* Image animation
  Resource/code referenced while creating animation for image 
    https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API */

function funcAnimate(){
const element = document.getElementById('animateid');
element.animate({ transform: 'scale(0)', opacity: 0 }, 300);
}
