import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

const Chat = ({ socket }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [joinedRooms, setJoinedRooms] = useState([]);

  const useUsername = useSelector((state) => state.chat.username);
  const useRoomId = useSelector((state) => state.chat.roomId);

  useEffect(() => {
    socket.on('chatMessage', (message, username) => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { message, username },
      ]);
    });

    socket.on('joinRoom', (roomId, username) => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          message: `${username} has joined the room ${roomId}`,
          username: 'System',
        },
      ]);
      if (username === useUsername) {
        setJoinedRooms((prevRooms) => [...prevRooms, roomId]);
      }
    });

    socket.on('leaveRoom', (roomId, username) => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          message: `${username} has left the room ${roomId}`,
          username: 'System',
        },
      ]);
      setJoinedRooms((prevRooms) =>
        prevRooms.filter((room) => room !== roomId)
      );
    });

    return () => {
      socket.off('chatMessage');
      socket.off('joinRoom');
      socket.off('leaveRoom');
    };
  }, [socket, chatMessages, joinedRooms]);

  const handleSendMessage = () => {
    if (message && useRoomId && useUsername) {
      socket.emit('chatMessage', message, useRoomId, useUsername);
      setMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <Sidebar />
    </>
  );
};

export default Chat;
