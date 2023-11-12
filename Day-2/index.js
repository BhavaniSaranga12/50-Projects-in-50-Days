var sounds= ["sounds/applause.mp3", "sounds/boo.mp3","sounds/gasp.mp3","sounds/tada.mp3","sounds/victory.mp3","sounds/wrong.mp3"];
var currentAudio=null;
for(let i=0;i<sounds.length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        playAudio(i);
    })
}

function playAudio(index) {
    // Check if there's currently playing audio
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to the beginning
    }

    // Play the new audio
    currentAudio = new Audio(sounds[index]);
    currentAudio.play();
}