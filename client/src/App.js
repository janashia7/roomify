import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatRooms from './ChatRoom';
import Register from './components/Register';
import Login from './components/Login';
import Chat from './components/ChatTest';
import io from 'socket.io-client';
import JoinRoomForm from './components/JoinRoomForm';
import Sidebar from './components/Sidebar';

const socket = io('http://localhost:5000');

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="chat" element={<Sidebar />}>
          {/* TODO: Add messaging component */}
          {/* <Route path="messaging" element={<Messaging />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
