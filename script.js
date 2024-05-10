console.log("Welcome to spotify")

// intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/Ace of base - Happy Nation.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')

let songItems = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    { songName: "Ace of base - Happy Nation", filePath: "songs/Ace of base - Happy Nation.mp3", coverPath: "images/1.jpeg" },
    { songName: "DJLuke Nasty - Might Be", filePath: "songs/DJLuke Nasty - Might Be.mp3", coverPath: "images/1.jpeg" },
    { songName: "Isabel LaRose - Favorite", filePath: "songs/Isabel LaRose - Favorite.mp3", coverPath: "images/1.jpeg" },
    { songName: "Isabel LaRose - I'm Yours", filePath: "songs/Isabel LaRose - I'm Yours.mp3", coverPath: "images/1.jpeg" },
    { songName: "OneRepublic - I ain't worried", filePath: "songs/OneRepublic - I ain't worried.mp3", coverPath: "images/1.jpeg" },
    { songName: "ovg! Virginity Syndrome", filePath: "songs/ovg! Virginity Syndrome.mp3", coverPath: "images/1.jpeg" },
    { songName: "Prabh - 09:45am", filePath: "songs/Prabh - 09:45am.mp3", coverPath: "images/1.jpeg" },
]

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

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
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})
// update seekbar

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/${songIndex + 1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById("previous").addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = 'songs/${songIndex + 1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})


document.getElementById("next").addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = 'songs/${songIndex + 1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})