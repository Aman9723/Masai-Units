const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

// not a server
// using it only for routing
const app = express();

// http requests will be handled by http server
// websocket request will be handled by io server
const httpServer = http.createServer(app);
const io = new Server(httpServer);

// users count on server
let totalUsers = 0;
const history = [];

// when user connects to server
io.on('connection', (socket) => {
    totalUsers++;
    console.log('A new user connected. Total users ', totalUsers);

    // emitting on same socket but for everyone except the connection
    socket.broadcast.emit('newuser');
    socket.emit('history', history);

    // when server recieves new message
    socket.on('newtext', (message) => {
        //notify others of this message
        history.push(message);
        io.emit('newtext', message);
        console.log('New message recieved', message);
    });

    // when user connection disconnects
    socket.on('disconnect', () => {
        totalUsers--;
        console.log('User disconnected. Total users ', totalUsers);
    });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

httpServer.listen(8080, () => {
    console.log(`Listening on http://localhost:8080`);
});
