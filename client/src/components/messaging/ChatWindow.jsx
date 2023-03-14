import React from 'react';
import { Box } from '@material-ui/core';

const ChatWindow = ({ children }) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '60%',
        backgroundColor:"#dbdad7"
      }}
    >
      {children}
    </Box>
  );
};

export default ChatWindow;
