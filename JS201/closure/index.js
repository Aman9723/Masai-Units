let id;

// bouncing previous called functions
function debounce(main, timeout) {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(() => {
        main();
    }, timeout);
}

async function main() {
    try {
        let query = document.getElementById('query').value;
        let res = await fetch(`http://www.omdbapi.com/?apikey=d78a4e70&s=${query}`);
        let data = await res.json();
        console.log(data);
        appendMovies(data.Search);
    }
    catch (err) {
        console.log(err);
    }
}

function appendMovies(data) {
    movies.innerHTML = '';
    data.forEach(elm => {
        let p = document.createElement('p');
        p.innerText = elm.Title;
        movies.append(p);
    });
}