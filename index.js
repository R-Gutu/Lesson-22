var button = document.getElementById('cta');
var topAnimation = document.querySelector('.top');
var leftAnimation = document.querySelector('.left');
var leftOneAnimation = document.querySelector('.leftone');
button.addEventListener('click', anim);

function anim(e){
if (topAnimation.style.animationName === "" || topAnimation.style.animationName === "up"){
topAnimation.style.animationName = 'down';
leftAnimation.style.animationName = 'right';
leftOneAnimation.style.animationName = 'leftone';
button.innerHTML = 'Delete animation';
} else {
    topAnimation.style.animationName = 'up';
    leftAnimation.style.animationName = 'left';
    button.innerHTML = 'Add animation';
    rightAnimation.style.animationName = 'lefttwo';
}

}


