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
  Divider,
} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import { Slide } from 'react-material-ui-carousel';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  { id: 6, name: 'Mary' },
  { id: 7, name: 'Peter' },
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
    justifyContent: 'center',
    flexDirection: 'column',
  },
  recentMessagesSection: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(-1),
    width: '336px',
  },
  recentMessagesTitle: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(3),
    marginBottom: '10px',
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
    marginLeft: '3px',
    width: '50px',
    height: '50px',
  },
  carousel: {
    width: 320,
    marginLeft: theme.spacing(2),
  },
  sliderContainer: {
    position: 'relative',
    width: 330,
    height: 82,
    marginTop:8,
    marginBottom:8,
    '& .slick-slider':{
       width:306,
       left:28
    },
    '& .slick-prev::before, .slick-next::before': {
      color: 'white',
      fontSize: '25px',
      display: 'block',
      paddingTop: '2.5px',
      backgroundImage: `radial-gradient(circle at center, black 0%, black 30%, rgba(255, 0, 0, 0) 50%)`,
    },
    '& .slick-prev.slick-disabled:before, .slick-next.slick-disabled:before': {
      opacity: '0',
      cursor: 'default',
    },
    '& .slick-next': {
      right: '-5px',
    },
    '& .slick-prev': {
      left: '-5px',
      zIndex: '1',
    },
    '& .slick-prev, .slick-next': {
      top: 23,
      width: '25px',
      height: '25px',
    },
  },
}));

const Messaging = () => {
  const classes = useStyles();
  const [activeUsers, setActiveUsers] = useState(onlineUsers);

  const chunks = activeUsers.reduce((acc, curr, index) => {
    const chunkIndex = Math.floor(index / 5);
    acc[chunkIndex] = acc[chunkIndex] || [];
    acc[chunkIndex].push(curr);
    return acc;
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.profileSection}>
        <Avatar className={classes.avatar} />
        <Typography style={{ marginLeft: '16px' }} variant="subtitle1">
          Current User
        </Typography>
      </Box>

      <Divider style={{ margin: '-20px 0px 20px 24px', width: '306px' }} />

      <Box className={classes.onlineNowSection}>
        <Typography variant="h6" className={classes.onlineNowTitle}>
          Online Now
        </Typography>
        <div className={classes.sliderContainer}>
          <Slider {...settings}>
            {activeUsers.map((item) => (
              <Box>
                <ListItemAvatar
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar style={{ width: '50px', height: '50px' }}>
                      {item.name.charAt(0)}
                    </Avatar>
                  </StyledBadge>
                </ListItemAvatar>
                <ListItemText
                  style={{ display: 'flex', justifyContent: 'center' }}
                  primary={item.name}
                />
              </Box>
            ))}
          </Slider>
        </div>
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
                style={{ paddingLeft: '10px' }}
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
