'use strict';

const tls = require('tls');
const fs = require('fs');

const host = '127.0.0.1';
const port = 5734;

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
};

const server = tls.createServer(options, function(socket) {
    socket.on('data', function(data) {
        console.log(
            'data: %s [%d bytes]',
            data.toString().replace(/(\n)/gm, '\\n').replace(/(\r)/gm, '\\r'),
            data.length,
        );
    });

    socket.on('end', function() {
        console.log('socket end');
    });

    socket.on('close', function() {
        console.log('socket close');
    });

    socket.on('error', function(error) {
        console.log('socket error', error);
    });

    setTimeout(() => {
        console.log('sending test');
        socket.write('test\r\n');
    }, 6000);
});

server.listen(port, host, function() {
    console.log("server listening %s:%s", host, port);
});

server.on('error', function(error) {
    console.log('server error', error);
});

server.on('connection', function() {
    console.log('socket open');
});
