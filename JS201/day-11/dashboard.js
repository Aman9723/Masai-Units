const getData = async (page_number) => {

    // page number 
    let per_page = 3;
    try {
        let res = await fetch(`http://localhost:3000/posts/?_page=${page_number}&_limit=${per_page}`);
        let data = await res.json();
        appendData(data);
    }
    catch (err) {
        console.log(err);
    }
};


const appendData = (data) => {
    container.innerHTML = '';
    data.forEach(elm => {
        let p = document.createElement('p');
        p.innerText = elm.id;
        container.append(p);
    });
}

const showButtons = (results, per_page) => {
    //10 buttons
    // i need to use loop
    // for how long?

    let buttons_div = document.getElementById('buttons');

    let buttons = Math.ceil(results / per_page);

    for (let i = 1; i <= buttons; i++) {
        let button = document.createElement('button');
        button.innerText = i;
        button.onclick = function () {
            getData(i);
        }
        buttons_div.append(button);
    }
};

showButtons(16, 3);