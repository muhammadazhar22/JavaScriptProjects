let video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
let progress = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');
const volume = document.getElementById('volume');
let volumeBtn = document.getElementById('volumebtn');
let progressValue, bgColor;
const screenSizeBtn = document.getElementById('screensizebtn');


console.log(volumeBtn);
// Functions
// 1 togglevideo - Play or Pause video
// if video is playing, then pause
// if video is paused, then play
function toggleVideo() {
    if (video.paused) {
        video.play();

    } else {
        video.pause();
    }
}

// 2 - updateIcon - toggle between play and pause icons 
// if video is playing, then show pause icon
// if video is paused, then show play icon
function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
}


// 3 - updateProgress - Update the position of the progress bar and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Update timestamp
    // Rounding down the minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    // Rounding down the seconds
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    // Display Timestamp
    timeStamp.innerHTML = `${minutes}:${seconds} / `;

}

// 4 - stopVideo - stop video playback and reset time to 0
function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

// 5 - setProgress -update video playback time based on manual change in progress bar
function setProgress() {
    video.currentTime = (progress.value * video.duration) / 100;




}



// 6 - Moving progress bar
function progressBar() {

    progressValue = progress.value;
    bgColor = 'linear-gradient(90deg, rgb(252,60,60) ' + progressValue + '%, rgb(214,214,214) ' + progressValue + '%)';
    progress.style.background = bgColor;


}

// 7 - Change volume 
function changeVol() {
    video.volume = volume.value / 100;
}

// 8 - Toggle volume  
function updateVolBtn() {
    if (video.muted) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-up fa-2x"></i>';
        video.muted = false;
    } else {
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute fa-2x"></i>';
        video.muted = true;
    }
}

// 9 - move volume range when volume icon is updated
function syncIconVolBar() {
    if (!video.muted) {
        volume.value = 50;
    } else {
        volume.value = 0;
    }
}

// 10 - volume progress bar 
function volProgressBar() {

    volprogressValue = volume.value;
    bgColor = 'linear-gradient(90deg, rgb(252,60,60) ' + volprogressValue + '%, rgb(214,214,214) ' + volprogressValue + '%)';
    volume.style.background = bgColor;


}

// 11 - make video full screen toggle 

function toggleFullScreen() {

    console.log(video.fullscreenElement);
    if (!document.fullscreenElement) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            /* IE/Edge */
            video.msRequestFullscreen();
        }
    } else {

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
        }
    }
}

// 12 - update screen icon
function updateScreenIcon() {
    if (video.fullscreenElement) {
        screenSizeBtn.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        screenSizeBtn.innerHTML = '<i class="fas fa-expand"></i>';
    }
}
// -------------------------------------------------------------------------------------------------------------------------

function updateScreenIcon() {

}
// -------------------------------------------------------------------------------------------------------------------------------------------
//Event Listeners
// 1 - Video Element - click to play or pause video
video.addEventListener('click', toggleVideo);

// 2 - Video Element - pause to toggle play icon to pause icon
video.addEventListener('pause', updateIcon);

// 3 - Video Element - play to toggle pause icon back to play icon
video.addEventListener('play', updateIcon);

// 4 - Video Element - update progress bar and timestamp 
video.addEventListener('timeupdate', updateProgress);

// 5 - Play Button - click to play or pause video
play.addEventListener('click', toggleVideo);

// 6 - Stop Button - click to reset video and pause video
stop.addEventListener('click', stopVideo);

// 7 - Progress Bar - change position to time of playback
progress.addEventListener('change', setProgress);

// 8 - progress bar - show progress bar
video.addEventListener('timeupdate', progressBar);

// 9 - to change volume
volume.addEventListener('change', changeVol);

// 10 - toggle volume icon
volumeBtn.addEventListener('click', updateVolBtn);

// 11 - move volume range 
volumeBtn.addEventListener('click', syncIconVolBar)

// 12 - volume progress bar 
volume.addEventListener('change', volProgressBar);

// 13 - sync volume bar and button
volumeBtn.addEventListener('click', volProgressBar);

// 14 - toggle screen mode 
screenSizeBtn.addEventListener('click', toggleFullScreen);

// 15 - update screen icon
screenSizeBtn.addEventListener('click', updateScreenIcon);

// 16 - Toggle on space bar press
//video.addEventListener('')