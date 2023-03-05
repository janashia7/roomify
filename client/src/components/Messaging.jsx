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
} from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const onlineUsers = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Mary' },
  { id: 3, name: 'Peter' },
  { id: 4, name: 'Mary' },
  { id: 5, name: 'Peter' },
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
    alignItems: 'flex-start',
  },
  profileSection: {
    display: 'flex',
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  onlineNowSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  onlineNowTitle: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(3),
  },
  onlineNowUserList: {
    marginLeft: theme.spacing(3),
    display: 'flex',
    width: '60px',
  },
  onlineNowListItem: {
    flexDirection: 'column',
  },
  recentMessagesSection: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(-1),
    width: '330px',
  },
  recentMessagesTitle: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(3),
    marginBottom: "10px"
  },
  recentMessagesList: {
    marginTop: theme.spacing(-1),

    marginLeft: theme.spacing(2),
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
    maxHeight: 'calc(100vh - 280px)',
  },
  avatar: {
    width: '50px',
    height: '50px',
  },
}));

const Messaging = () => {
  const classes = useStyles();
  const [activeUsers, setActiveUsers] = useState(onlineUsers);

  return (
    <Box className={classes.root}>
      <Box className={classes.profileSection}>
        <Avatar className={classes.avatar} />
        <Typography style={{ marginLeft: '16px' }} variant="subtitle1">
          Current User
        </Typography>
      </Box>

      <Box className={classes.onlineNowSection}>
        <Typography variant="h6" className={classes.onlineNowTitle}>
          Online Now
        </Typography>
        <List className={classes.onlineNowUserList}>
          {activeUsers.map((user) => (
            <ListItem className={classes.onlineNowListItem} key={user.id}>
              <ListItemAvatar style={{ marginLeft: '16px' }}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar className={classes.avatar}>
                    {user.name.charAt(0)}
                  </Avatar>
                </StyledBadge>
              </ListItemAvatar>
              <ListItemText primary={user.name} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box className={classes.recentMessagesSection}>
        <Typography variant="h6" className={classes.recentMessagesTitle}>
          Messages
        </Typography>

        <List className={classes.recentMessagesList}>
          {recentMessages.map((message) => (
            <ListItem key={message.id}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  {message.name.charAt(0)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={message.name}
                secondary={message.message}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Messaging;
