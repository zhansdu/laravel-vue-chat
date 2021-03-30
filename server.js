var server = require('http').Server();
var io = require('socket.io')(server,
{
  cors: {
    origin: "http://localhost:8000",
    methods: ["GET", "POST"],
    transports: ['websocket', 'polling'],
    credentials: true
  },
  allowEIO3: true
});
var Redis = require('ioredis');
var redis = new Redis();

redis.subscribe('chat');

redis.on('message', function(channel, message) {
  console.log('Message recieved: ' + message);
  console.log('Channel: ' + channel);
  message = JSON.parse(message);
  io.emit(channel + ':' + message.event, message.data);
});

const APP_PORT = process.env.NODE_APP_PORT || 3000

server.listen(APP_PORT, {
  cookie: false
}, () => {
  console.log("Server running at " + APP_PORT);
});

var userCount = 0;

io.on('connection', function (socket) {

  userCount++;

  io.sockets.emit('userCount', { userCount: userCount });
  
  socket.on('disconnect', function() {
    userCount--;
    io.sockets.emit('userCount', { userCount: userCount });
  });
});
