// fetch('https://fakestoreapi.com/products')
//     .then(function (res) {
//         return res.json();
//     })
//     .then(function (res) {
//         console.log(res);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

let data;
async function getData() {
    try {
        let res = await fetch('https://fakestoreapi.com/products');
        data = await res.json();
        apppendProducts(data);
    }
    catch {
        console.log('error');
    }
}

getData();

//we need to apppend
 
function apppendProducts(data) {
    container.innerHTML = '';
    data.forEach( elm => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = elm.image;
        let title = document.createElement('p');
        title.innerText = elm.title;
        let price = document.createElement('p');
        price.innerText = elm.price;
        div.append(img, title, price);
        container.append(div);
    });
}

function sortLH() {
    data = data.sort((a, b) => {
        return a.price - b.price;
    });
    apppendProducts(data);
}

function sortHL() {
    data = data.sort((a, b) => {
        return b.price - a.price;
    });
    apppendProducts(data);
}

// how to keep original data?
// dynamic filtering

function filter() {
    let query = document.getElementById('query').value;
    let copy_data = data;
    copy_data = copy_data.filter(function (elm) {
        return elm.title.toLowerCase().includes(query.toLowerCase());
    });
    apppendProducts(copy_data);
}