let container = document.getElementById('container');
let map = document.getElementById('gmap_canvas');
let city;

function getWeather() {
    city = document.getElementById('city').value;
    getData(city);
}

async function getData(city) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d6c5b6cfb991f016f80837a830a3f04f`);
    let data = await res.json();
    console.log(data);
    appendData(data);
}

function appendData(data) {
    map.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}