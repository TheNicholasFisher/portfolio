//this was made with chatgpt i dont know js :skull:

document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('randomVideo');
    const overlay = document.getElementById('overlay');
    const playButton = document.getElementById('playButton');
    const videoNumber = Math.floor(Math.random() * 101) + 1;
    const videoSource = `${videoNumber}.mp4`;

    videoElement.src = videoSource;

    playButton.addEventListener('click', function() {
        overlay.style.display = 'none';
        videoElement.style.display = 'block';
        videoElement.play().catch(error => {
            console.log('Autoplay was prevented:', error);
        });
    });

    videoElement.addEventListener('play', function() {
        videoElement.volume = 1;
        videoElement.controls = false;
    });

    videoElement.addEventListener('pause', function() {
        videoElement.play();
    });
});