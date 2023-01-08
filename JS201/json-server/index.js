let Register = async () => {
    let register_data = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
        username: document.querySelector('#username').value,
        description: document.querySelector('#description').value,
        mobile: document.querySelector('#mobile').value,
    }

    // base url - https://masai-api-mocker.herokuapp.com/
    // sub url - auth / register

    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
        method: 'POST',
        body: JSON.stringify(register_data),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    let data = await res.json();
    console.log(data);
};

let Login = async () => {
    let login_data = {
        username: document.getElementById('login_username').value,
        password: document.getElementById('login_password').value,
    };

    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
        method: 'POST',
        body: JSON.stringify(login_data),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    let data = await res.json();
    console.log(data);
    let { token } = data;
    let { username } = login_data;
    getProfile(username, token);
};

let getProfile = async (username, token) => {
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    });
    let data = await res.json();
    console.log(data);
};

