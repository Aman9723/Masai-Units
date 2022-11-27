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
    // const userData = fetch('whatever.github.com/api?code=Githubcode')
    // const user = await UserModel.create({ ...userData });
    try {
        // github sends a code valid for 10mins
        const { code } = req.query;

        // request accessToken from github
        let data = await fetch(
            `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        data = await data.json();
        const { access_token } = data;

        // request user details from github
        let userDetails = await fetch(`https://api.github.com/user`, {
            headers: { Authorization: `Bearer ${access_token}` },
        });
        userDetails = await userDetails.json();

        return res.status(202).send('Sign in with github success');
    } catch (e) {
        return res.status(400).send(e.message);
    }
    // store details in db
    // have fields "loogedIn: true"
});

app.listen(8080, () => {
    console.log('Listening on port 8080 ...');
});
