// Possible improvements:
// - Change timeline and volume slider into input sliders, reskinned
// - Change into Vue or React component
// - Be able to grab a custom title instead of "Music Song"
// - Hover over sliders to see preview of timestamp/volume change

const audioPlayer = document.querySelector(".audio-player");

let pathPage = window.location.pathname;
let trackNumber = pathPage.match(/\d+/);

const audio = new Audio("../../Audio/track_" + trackNumber + ".wav");

console.dir(audio);

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
    audio.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector(".controls .toggle-play");
playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
  },
  false
);

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  const volumePer = audioPlayer.querySelector(".volume-slider .volume-percentage")
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icon-volumeMedium");
    volumeEl.classList.add("icon-volumeMute");
    volumePer.classList.add("volume-muted");
  } else {
    volumeEl.classList.add("icon-volumeMedium");
    volumeEl.classList.remove("icon-volumeMute");
    volumePer.classList.remove("volume-muted");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

/* Upscaling track image */

/* Track Image */

let trackCover = document.getElementById('track_cover');
let trackImage = document.getElementById('track_image');

let trackUpscaleCover = document.getElementById('track-upscale_cover');
let trackUpscaleImages = document.getElementById('closer-upscale_images');

let trackIcon = document.getElementById('track-upscale_icon')

trackCover.addEventListener('click', function() {
    console.log('done');
    trackUpscaleCover.style.visibility = "visible";
})

trackIcon.addEventListener('click', function () {
    trackUpscaleCover.style.visibility = "hidden";
})
