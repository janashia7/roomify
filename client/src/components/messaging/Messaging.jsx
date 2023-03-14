import { useState } from 'react';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles,
  Divider,
} from '@material-ui/core';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import MessagingHeader from './MessagingHeader';
import ChatWindow from './ChatWindow';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const onlineUsers = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Mary' },
  { id: 3, name: 'Peter' },
  { id: 4, name: 'Mary' },
  { id: 5, name: 'Peter' },
  { id: 6, name: 'Mary' },
  { id: 7, name: 'Peter' },
];

const recentMessages = [
  { id: 1, name: 'John', message: 'Hello, how are you?' },
  { id: 2, name: 'Mary', message: 'Hi there!' },
  { id: 3, name: 'John', message: 'I am doing good, thanks.' },
  { id: 1, name: 'John', message: 'Hello, how are you?' },
  { id: 2, name: 'Mary', message: 'Hi there!' },
  { id: 3, name: 'John', message: 'I am doing good, thanks.' },
  { id: 1, name: 'John', message: 'Hello, how are you?' },
  { id: 2, name: 'Mary', message: 'Hi there!' },
  { id: 3, name: 'John', message: 'I am doing good, thanks.' },
  { id: 1, name: 'John', message: 'Hello, how are you?' },
  { id: 2, name: 'Mary', message: 'Hi there!' },
  { id: 3, name: 'John', message: 'I am doing good, thanks.' },
  { id: 2, name: 'Mary', message: 'Hi there!' },
  { id: 3, name: 'John', message: 'I am doing good, thanks.' },
  { id: 2, name: 'Mary', message: 'Hi there!' },
  { id: 3, name: 'John', message: 'I am doing good, thanks.' },
  { id: 2, name: 'Mary', message: 'Hi there!' },
  { id: 3, name: 'John', message: 'I am doing good, thanks.' },
  // ...
];

const Messaging = () => {
  const [activeUsers, setActiveUsers] = useState(onlineUsers);

  return (
    <Box style={{ display: 'flex', flexDirection:"row", height: '100%', width: '100%' }}>
      <MessagingHeader
        activeUsers={activeUsers}
        recentMessages={recentMessages}
      />
      <ChatWindow>
        <ChatHeader />
        <ChatMessages />
        <ChatInput />
      </ChatWindow>
    </Box>
  );
};

export default Messaging;
