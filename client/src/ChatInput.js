// import React from 'react';

// const ChatInput = ({ socket, setMessage, message }) => {
//   const handleInputChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       if (message) {
//         socket.emit('send-message', meetingId, participantId, message);
//         setMessage('');
//       }
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Type your message here..."
//         value={message}
//         onChange={handleInputChange}
//         onKeyDown={handleKeyDown}
//       />
//     </div>
//   );
// };

// export default ChatInput;
