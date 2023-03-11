import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Chat from './components/ChatTest';
import io from 'socket.io-client';
import JoinRoomForm from './components/JoinRoomForm';
import Sidebar from './components/Sidebar';
import Messaging from './components/Messaging';

const socket = io('http://localhost:5000');

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="chat" element={<Sidebar />}>
          <Route path="messaging" element={<Messaging />} />
          {/* TODO: Add messaging component */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
