let id;
let delay;
function setDelay() {
    delay = +document.querySelector('#delay').value;
    console.log(delay);
}

let counter = 0;
function start() {
    let images = JSON.parse(localStorage.getItem('images'));
    let container = document.querySelector('#container');
    let image = document.createElement('img');
    image.src = images[counter];
    container.append(image);
    counter++;
    console.log(counter);
    id = setInterval(function () {
        container.innerHTML = '';
        if (counter > images.length - 1) {
            counter = 0;
        }
        image.src = images[counter];
        container.append(image);
        counter++;
        console.log(counter)
    }, delay);
}

function pause() {
    clearInterval(id);
}

