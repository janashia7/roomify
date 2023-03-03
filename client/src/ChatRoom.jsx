import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ChatRoom from './components/Chat';
import JoinRoomForm from './components/JoinRoomForm';

const socket = io('http://localhost:5000');

const ChatRooms = () => {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [joinedRooms, setJoinedRooms] = useState([]);
  const [joined, setJoined] = useState(false);

  const handleLeaveRoom = (room) => {
    socket.emit('leaveRoom', room, username);
  };

  return (
    <div>
      {!joined ? (
        <JoinRoomForm socket={socket} setJoined={setJoined} />
      ) : (
        <ChatRoom socket={socket} />
      )}
    </div>
  );
};

export default ChatRooms;
