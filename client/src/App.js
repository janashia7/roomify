import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatRooms from './ChatRoom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Register from './components/Register';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/chat" element={<ChatRooms />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
