import React from 'react';
import { Box, Button, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useRef } from 'react';

const useStyles = makeStyles({
  MessagesList: {
    display: 'flex',
    position: 'relative',
    '&::-webkit-scrollbar': {
      width: '8px',
      backgroundColor: '#F5F5F5',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)',
      backgroundColor: '#555',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
      backgroundColor: '#F5F5F5',
    },
    overflowY: 'auto',
    height: 'calc(100vh - 20%)',
  },
  scrollButton: {
    position: 'fixed',
    top: '85%',
    left: '20%',
  },
});

const ChatMessages = ({ messages }) => {
  const classes = useStyles();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box className={classes.MessagesList}>
      <List>
        {/* {messages.map((msg, i) => (
        <div key={i}>{msg}</div>
      ))} */}
      </List>
    </Box>
  );
};

export default ChatMessages;
