
let playVideo = () => {
    let videoID = localStorage.getItem('videoID');
    let iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoID}`;
    iframe.width = '560px';
    iframe.height = '315px';
    iframe.allowFullscreen = 'true';
    video_slot.append(iframe);
}

playVideo();