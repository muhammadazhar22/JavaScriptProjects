"use strict";

var video = document.getElementById('video');
var play = document.getElementById('play');
var stop = document.getElementById('stop');
var progress = document.getElementById('progress');
var timestamp = document.getElementById('timestamp');
var volume = document.getElementById('video'); // Functions
// 1 togglevideo - Play or Pause video
// if video is playing, then pause
// if video is paused, then play

function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
} // 2 - updateIcon - toggle between play and pause icons 
// if video is playing, then show pause icon
// if video is paused, then show play icon


function updateIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
  }
} // 3 - updateProgress - Update the position of the progress bar and timestamp


function updateProgress() {
  progress.value = video.currentTime / video.duration * 100; // Update timestamp
  // Rounding down the minutes

  var minutes = Math.floor(video.currentTime / 60);

  if (minutes < 10) {
    minutes = "0".concat(minutes);
  } // Rounding down the seconds


  var seconds = Math.floor(video.currentTime % 60);

  if (seconds < 10) {
    seconds = "0".concat(seconds);
  } // Display Timestamp


  timestamp.innerHTML = "".concat(minutes, ":").concat(seconds);
} // 4 - stopVideo - stop video playback and reset time to 0


function stopVideo() {
  video.pause();
  video.currentTime = 0;
} // 5 - setProgress -update video playback time based on manual change in progress bar


function setProgress() {
  video.currentTime = progress.value * video.duration / 100;
} //Event Listeners
// 1 - Video Element - click to play or pause video


video.addEventListener('click', toggleVideo); // 2 - Video Element - pause to toggle play icon to pause icon

video.addEventListener('pause', updateIcon); // 3 - Video Element - play to toggle pause icon back to play icon

video.addEventListener('play', updateIcon); // 4 - Video Element - update progress bar and timestamp 

video.addEventListener('timeupdate', updateProgress); // 5 - Play Button - click to play or pause video

play.addEventListener('click', toggleVideo); // 6 - Stop Button - click to reset video and pause video

stop.addEventListener('click', stopVideo); // 7 - Progress Bar - change position to time of playback

progress.addEventListener('change', setProgress); // 8 -volume bar -