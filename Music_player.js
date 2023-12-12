document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const albumArt = document.getElementById("album-art");
    const songTitle = document.getElementById("song-title");
    const artist = document.getElementById("artist");
    const playlist = document.getElementById("playlist");
    const playPauseButton = document.getElementById("play-pause-button");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");

    let isPlaying = false;
    let currentSongIndex = 0;

    const songs = [
        { src: "01  Bhool Bhulaiyaa - www.downloadming.com.mp3", title: "Bhulbhulia", artist: "Neeraj Shridhar", image: "bhulbhulia.jpg" },
        { src: "Songs/08  Alla Hafiz - www.downloadming.com.mp3", title: "Allah Hafiz", artist: "KK", image: "allah hafiz.jpg" },
        { src: "_Heeriye(PagalWorld.com.pe).mp3", title: "Heeriye", artist: "Arijit Aingh & Jasleen Royal", image: "Herie.jpg" },
        { src: "Khalasi_320(PagalWorld.com.pe).mp3", title: "Khalasi", artist: "Aditya Gadvi", image: "khalasi.jpg" },
        { src: "Neeti Mohan - Meri Jaan(PagalWorld.com.pe).mp3", title: "Meri Jan", artist: "Neeti Mohan", image: "Meri Jan.jpg" },
        { src: "Rab Na Kare_320(PagalWorld.com.pe).mp3", title: "Rab Na Kare", artist: "Shriya Jain", image: "download (2).jpg" },
        { src: "Alada Alada - PagalRingtone.Com.mp3", title: "Alada Alada ", artist: "Iman Chakroborty ", image: "alada.jpg" },
        { src: "Malang Sajna_320(PagalWorld.com.pe).mp3", title: "Malang Sajna", artist: "Parampara Thakur & Sachit Tandon", image: "malang_sajna.jpg" },
    ];

    playPauseButton.addEventListener("click", togglePlayPause);

    nextButton.addEventListener("click", function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
    });

    prevButton.addEventListener("click", function () {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
    });

    playlist.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            currentSongIndex = Array.from(playlist.children).indexOf(event.target);
            loadSong(currentSongIndex);
        }
    });

    function playAudio() {
        isPlaying = true;
        audioPlayer.play();
        playPauseButton.textContent = "Pause";
    }

    function pauseAudio() {
        isPlaying = false;
        audioPlayer.pause();
        playPauseButton.textContent = "Play";
    }

    function togglePlayPause() {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    }

    function loadSong(index) {
        const song = songs[index];
        audioPlayer.src = song.src;
        songTitle.textContent = song.title;
        artist.textContent = song.artist;
        albumArt.style.backgroundImage = `url('${albumArt.style.backgroundImage = `url('${song.image}')`}')`; 
        playAudio();
    }
});
