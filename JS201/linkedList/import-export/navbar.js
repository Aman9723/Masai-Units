function navbar() {
    return `hello`;
}

// call the api
// get data
// append data -> (what & where) -> (data, htmllocation)
async function getData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }

    function append(data, location) {
        data.forEach(({title,image}) => {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let img = document.createElement(img);
            p.innerText = title;
            img.src = image;
        });
    }
}

export default { navbar, getData };