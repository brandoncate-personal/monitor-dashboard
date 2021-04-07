const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => {
    res.send('mock')
});

io.on('connection', (socket) => {
    console.log('a user connected');
    var scheduleEmit1 = setInterval(() => io.emit('testcase', {
        name: "fake name 1",
        statusCode: 200,
        stdout: "fake stdout",
        stderr: "fake stderr",
    }), 3000)
    var scheduleEmit2 = setInterval(() => io.emit('testcase', {
        name: "fake name 2",
        statusCode: 200,
        stdout: "fake stdout",
        stderr: "fake stderr",
    }), 5000)
    socket.on('disconnect', () => {
        console.log('user disconnected');
        clearInterval(scheduleEmit1)
        clearInterval(scheduleEmit2)
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});