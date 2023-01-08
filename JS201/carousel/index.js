let count = 10;
let h = document.querySelector('#time');
function welcome() {
    if (count == 0) clearInterval(id);
    h.innerText = count + ' ';
    count--;
    let inp = document.getElementById('test').value;
    if (inp === 'the quick brown fox jumps over the lazy dog') {
        alert("Winner winner chicken dinner");
        clearInterval(id)
    }
}

let id = setInterval(() => {
    welcome();
}, 1000);