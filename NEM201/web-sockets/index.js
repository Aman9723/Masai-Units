const { EventEmitter } = require('events');

const Button = new EventEmitter();
const Player = new EventEmitter();

// event listener
Button.on('click', (params) => {
    console.log('button clicked');
    Player.emit('shoot', params);
});

Player.on('shoot', (params) => {
    console.log(`${params} shot bullet`);
});

// triggered
Button.emit('click', 'player1');

module.exports = Button;
