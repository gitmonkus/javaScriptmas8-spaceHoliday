const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const bellEl = document.getElementById("bell")
const treeEl = document.getElementById("tree")
const audio = new Audio('audio/spaceO.mp3')
playBtn.addEventListener("click", play)
pauseBtn.addEventListener("click", pause)
stopBtn.addEventListener("click", stop)

function addClass() {
    bellEl.classList.add('animate-bell')
    treeEl.classList.add('animate-tree')
}

function removeClass() {
    bellEl.classList.remove('animate-bell')
    treeEl.classList.remove('animate-tree')
}

function animationStatePaused() {
    bellEl.style.animationPlayState = 'paused'
    treeEl.style.animationPlayState = 'paused'
}
function animationStateRunning() {
    bellEl.style.animationPlayState = 'running'
    treeEl.style.animationPlayState = 'running'
}

function play() {
    audio.play()
    addClass()
    animationStateRunning()
    
}
 
 function pause() {
    audio.pause()
    animationStatePaused()
    
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
    removeClass()
}

// Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped. 

//NB: You'll need to make changes in the CSS too 😉

// Stretch goal:
// - Make sure the animation doesn't reset when paused.


