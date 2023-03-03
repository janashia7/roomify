const { Server } = require('socket.io');

module.exports = function (server) {
  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('a user connected');

    // Join a chat room
    socket.on('joinRoom', (roomId, username) => {
      socket.join(roomId);
      console.log(`User ${username} joined room ${roomId}`);
      io.to(roomId).emit('joinRoom', roomId, username);
    });

    // Leave a chat room
    socket.on('leaveRoom', (roomId, username) => {
      socket.leave(roomId);
      console.log('left room ' + username + roomId);
      io.to(roomId).emit('leaveRoom', roomId, username);
    });

    // Receive a chat message and broadcast to room
    socket.on('chatMessage', (message, roomId, username) => {
      console.log(`Received message "${message}" in room ${roomId}`);
      io.to(roomId).emit('chatMessage', message, username);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};
