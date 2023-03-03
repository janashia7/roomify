import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setRoomId, setUsername } from '../redux/reducers/chat';

const JoinRoomForm = ({ socket, setJoined }) => {
  const dispatch = useDispatch();
  const [roomId, setRoomIdLocal] = useState('');
  const [username, setUsernameLocal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setUsername(username));
    dispatch(setRoomId(roomId));
    socket.emit('joinRoom', roomId, username);
    setJoined(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Room ID"
            value={roomId}
            onChange={(e) => setRoomIdLocal(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Username"
            value={username}
            onChange={(e) => setUsernameLocal(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            disabled={!roomId || !username}
          >
            Join Room
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default JoinRoomForm;
