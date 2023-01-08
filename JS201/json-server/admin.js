async function addPost() {
    // accept values 
    let id = +document.getElementById('id').value;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;

    // send this data to serve

    // i need to talk to server 

    // how do we talk to server 

    // make POST request using fetch

    // how many arguments that we can pass to fetch

    // how we ever told fetch which request to make? (GET)

    // WHAT IS DEFAULT REQUEST FOR FETCH? (GET)

    // If i want to make a different request (POST)

    let send_this_data = {
        id,
        title,
        author,
    };

    let res = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(send_this_data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await res.json();
    console.log(data);
}

async function deletePost() {
    let id = document.querySelector('#delete_id').value;
    let res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await res.json();
    console.log(data);
}

const updatePost = async () => {
    let id = document.getElementById('update_id').value;;
    let new_title = document.getElementById('update_title').value;
    let send_data = {
        title: new_title,
    }
    // DOES SERVER NEEDS TO KNOW YOUR NEW TITLE

    let res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(send_data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await res.json();
    console.log(data);
}

const replacePost = async () => {
    let id = document.getElementById('replace_id').value;;
    let new_title = document.getElementById('replace_title').value;
    let send_data = {
        title: new_title,
    }
    let res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(send_data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await res.json();
    console.log(data);
}