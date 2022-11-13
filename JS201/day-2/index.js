// start of promise
// promise in process
// promise ends

// 1. promise is fullfilled (sweets)
// 2. promise is failed (chappal)
// 3. promise is pending

// when you make a promise, it takes time
// promise will return a value after some time

// promise shouldn't have blocking behaviour
let img = document.getElementById('img');

// mimicking getting the data
function getData() {
    // nature of data?
    return true;
}

let myPromise = new Promise(function (resolve, reject) {
    let data;
    setTimeout(() => {
        data = getData();

        if (data) {
            resolve('sweets');
            img.src = 'https://media0.giphy.com/media/Q81NcsY6YxK7jxnr4v/200w.webp?cid=ecf05e47du9rfrb5n1wqylpwka83yq4zksqob66dao6h9zsx&rid=200w.webp&ct=g';
        }
        else {
            reject('chappal');
        }
    }, 2000);
});

// when promise is resolved
myPromise.then(function (res) {
    console.log(res);
});

// when promise is rejected
myPromise.catch(function (err) {
    console.log(err);
});

// doesn't care whether promise is rejected or resolved
myPromise.finally(function () {
    console.log('ran');
});

console.log(myPromise);