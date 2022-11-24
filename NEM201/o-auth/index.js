const express = require('express');
const app = express();

// place these in .env file
// used for github authentication
const CLIENT_ID = '83c7505c9fe6be90b3a6';
const CLIENT_SECRET = 'e8b2e47f20d81786db5557b87ef52d70b7b910cd';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/github/callback', async (req, res) => {
    const { code } = req.query;
    console.log('Github code: ' + code);

    // const userData = fetch('whatever.github.com/api?code=Githubcode')
    // const user = await UserModel.create({ ...userData });

    const { accessToken } = await fetch(
        'https://github.com/login/oauth/access_token',
        {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code,
            }),
        }
    )
        .then((e) => e.json())
        .catch(console.error);

    console.log('Access', accessToken);

    const userDetails = await fetch('https://github.com/user', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((x) => x.json())
        .catch(console.error);

    console.log(userDetails);

    return res.send('sign in with github success');
});

app.listen(8080, () => {
    console.log('Listening on port 8080 ...');
});
