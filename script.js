console.log("Welcome to Spotify");

// intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/Ace of base - Happy Nation.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    { songName: "Ace of base - Happy Nation", filePath: "songs/1.mp3", coverPath: "images/1.jpeg" },
    { songName: "DJLuke Nasty - Might Be", filePath: "songs/2.mp3", coverPath: "images/1.jpeg" },
    { songName: "Isabel LaRose - Favorite", filePath: "songs/3.mp3", coverPath: "images/1.jpeg" },
    { songName: "Isabel LaRose - I'm Yours", filePath: "songs/4.mp3", coverPath: "images/1.jpeg" },
    { songName: "OneRepublic - I ain't worried", filePath: "songs/5.mp3", coverPath: "images/1.jpeg" },
    { songName: "ovg! Virginity Syndrome", filePath: "songs/6.mp3", coverPath: "images/1.jpeg" },
    { songName: "Prabh - 09:45am", filePath: "songs/7.mp3", coverPath: "images/1.jpeg" },
];

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


// handle play,pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

// listen to events
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// songs lists

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
    });
});

// backward forward song play
document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});


document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});