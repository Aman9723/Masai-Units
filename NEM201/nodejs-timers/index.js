const fs = require('fs');

fs.readFile('index.js', 'base64', (err, data) => {
    setImmediate(() => {
        console.log('immediate 1');
    });
    setTimeout(() => {
        console.log('timeout 1');
    }, 0);

    process.nextTick(() => {
        console.log('inside nextTick');
    });
});

// setImmediate gets priority incase of I/0 callback (reading, writing) over setTimeout
setImmediate(() => {
    console.log('immediate 2');
});
setTimeout(() => {
    console.log('timeout 2');
}, 0);

// nextTick is given the highest priority
process.nextTick(() => {
    console.log('inside nextTick');
});
