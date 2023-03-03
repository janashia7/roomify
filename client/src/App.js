import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatRooms from './ChatRoom';
import Register from './components/Register';
import Login from './components/Login';
import Chat from './components/Chat';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/chat" element={<Chat socket={socket} />} />
      </Routes>
    </Router>
  );
};

export default App;
