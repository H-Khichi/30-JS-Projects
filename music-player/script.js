let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.pause();

song.onloadeddata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (ctrlIcon.classList.contains("bi-play-fill")) {
        song.play();
        ctrlIcon.classList.remove("bi-play-fill");
        ctrlIcon.classList.add("bi-pause-fill");
    } else {
        song.pause();
        ctrlIcon.classList.remove("bi-pause-fill");
        ctrlIcon.classList.add("bi-play-fill");
    }
}

song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

progress.onchange = function () {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("bi-play-fill");
        ctrlIcon.classList.add("bi-pause-fill");
    }
};
