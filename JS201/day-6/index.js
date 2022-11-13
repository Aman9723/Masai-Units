let API_KEY = 'AIzaSyCx64SZvjIE9cvEC6ftRX0PJaYZWntHon0';
let video_id;

let getData = async () => {
    try {
        let query = document.getElementById('query').value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&part=snippet&maxResults=10`);
        // items is an array of Object
        let { items } = await res.json();
        appendVideos(items);
        console.log(items);
    }
    catch (err) {
        console.log(err);
    }
};

let appendVideos = (data) => {
    container.innerHTML = '';
    data.forEach(({ snippet: { title }, id: { videoId }, snippet: { thumbnails } }) => {
        let { high: { url } } = thumbnails;
        let div = document.createElement('div');
        div.addEventListener('click', () => {
            localStorage.setItem('videoID', videoId);
            window.location.href = 'video.html';
        });
        let image = document.createElement('img');
        image.src = `${url}`;
        let name = document.createElement('h5');
        name.innerText = title;
        div.append(image, name);
        container.style.gridTemplateColumns = 'repeat(1,50%)';
        div.style.margin = 'auto';
        div.style.display = 'flex';
        div.style.gap = '10px';
        container.append(div);
    });
};

window.onload = () => {
    showHome();
}

let showHome = async () => {
    console.log('hello')
    try {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?&key=${API_KEY}&part=snippet&maxResults=20&regionCode=IN&chart=mostPopular`);
        // items is an array of Object
        let { items } = await res.json();
        appendHome(items);
    }
    catch (err) {
        console.log(err);
    }
}

let appendHome = (data) => {
    container.innerHTML = '';
    data.forEach(({ snippet: { title }, id: { videoId }, snippet: { thumbnails } }) => {
        let { high: { url } } = thumbnails;
        let div = document.createElement('div');
        div.addEventListener('click', () => {
            localStorage.setItem('videoID', videoId);
            window.location.href = 'video.html';
        });
        let image = document.createElement('img');
        image.src = `${url}`;
        let name = document.createElement('h5');
        name.innerText = title;
        div.append(image, name);
        container.style.gridTemplateColumns = 'repeat(4,1fr)';
        div.style.flexDirection = 'column';
        image.style.width = '100%';
        container.append(div);
    });
}
