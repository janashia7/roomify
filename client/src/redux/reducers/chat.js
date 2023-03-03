import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  roomId: '',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },
  },
});

export const { setUsername, setRoomId } = chatSlice.actions;

export default chatSlice.reducer;
