var button = document.getElementById('cta');
var topAnimation = document.querySelector('.top');
var leftAnimation = document.querySelector('.left');

button.addEventListener('click', anim);

function anim(e){
if (topAnimation.style.animationName === "" || topAnimation.style.animationName === "up"){
topAnimation.style.animationName = 'down';
leftAnimation.style.animationName = 'right';
button.innerHTML = 'Delete animation';
} else {
    topAnimation.style.animationName = 'up';
    leftAnimation.style.animationName = 'left';
    button.innerHTML = 'Add animation';
}

}


