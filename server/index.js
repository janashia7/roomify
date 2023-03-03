const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io');
const cors = require('cors');
const connectDB = require('./src/db');
const authRoutes = require('./src/routes/auth');
const socketIO = require('./src/socketIO');

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server listening on port :${PORT}`);
});

socketIO(server);
