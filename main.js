var sceneryFrames = [
    { transform: 'translateX(100%)'},
    { transform: 'translateX(-100%)'}
];

var sceneryTiming = {
    duration: 3600,
    iterations: Infinity,
    playbackRate: -2
};

var background = document.getElementById("background");

var backgroundMovement = background.animate(sceneryFrames, sceneryTiming);

backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration / 2

var flyFaster = function() {
     backgroundMovement.playbackdate *= 1.1
}

document.addEventListener('click', flyFaster);