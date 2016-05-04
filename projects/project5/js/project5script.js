$(document).ready(function () {
var overlay = document.getElementById('video-overlay1');
var video = document.getElementById('song');
var videoPlaying = false;
overlay.onclick = function() {
    if (videoPlaying) {
        video.pause();
        videoPlaying = false;
    }
    else {
        video.play();
        videoPlaying = true;
    }
}

)};