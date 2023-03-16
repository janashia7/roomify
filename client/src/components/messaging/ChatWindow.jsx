import React from 'react';
import { Box } from '@material-ui/core';

const ChatWindow = ({ children }) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '60%',
        marginLeft:8,
        backgroundColor:"#dbdad7"
      }}
    >
      {children}
    </Box>
  );
};

export default ChatWindow;
