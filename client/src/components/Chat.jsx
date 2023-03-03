import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  Button,
  Divider,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Send as SendIcon } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  container: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  chatList: {
    flexGrow: 1,
    overflowY: 'auto',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1),
    },
  },
  messageInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(1),
    },
  },
}));

const ChatRoom = ({ socket }) => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [joinedRooms, setJoinedRooms] = useState([]);

  const useUsername = useSelector((state) => state.chat.username);
  const useRoomId = useSelector((state) => state.chat.roomId);

  useEffect(() => {
    // Listen for incoming chat messages
    socket.on('chatMessage', (message, username) => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { message, username },
      ]);
    });

    // Listen for userJoinedRoom event
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

    // Listen for userLeftRoom event
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

    // Cleanup function to unsubscribe from socket events
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
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h5">Chat Rooms</Typography>
              <List>
                {joinedRooms.map((room, i) => (
                  <ListItem button key={i}>
                    <ListItemText primary={room} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className={classes.chatContainer}>
              <List className={classes.chatList}>
                {chatMessages.map((msg, i) => (
                  <ListItem key={i}>
                    {msg.username === useUsername ? (
                      <ListItemSecondaryAction>
                        <ListItemText
                          primary={`${msg.username}: ${msg.message}`}
                        />
                      </ListItemSecondaryAction>
                    ) : (
                      <ListItemText
                        primary={`${msg.username}: ${msg.message}`}
                      />
                    )}
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Box className={classes.messageInput}>
                <TextField
                  className={classes.input}
                  variant="outlined"
                  placeholder="Type a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <IconButton color="primary" onClick={handleSendMessage}>
                  <SendIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end" marginTop={2}>
          <Button variant="contained" color="secondary">
            Leave Room
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default ChatRoom;
