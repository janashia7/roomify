import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import chatReducer from './reducers/chat';

const rootReducer = combineReducers({
  chat: chatReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
