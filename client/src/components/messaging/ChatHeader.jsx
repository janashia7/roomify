import React from 'react';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { AvatarGroup, ListItemButton } from '@mui/material';
import {
  CallOutlined,
  PendingOutlined,
  VideocamOutlined,
} from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '40px 20px',
  },
  groupAvatar: {
    '& .MuiAvatarGroup-avatar': {
      border: '2px solid white !important',
      width: 35,
      height: 35,
    },
  },

  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // listItemButton: {
  //   display: 'flex !important',
  //   justifyContent: 'center !important',
  //   borderRadius:"20px",
  //   height: 40,
  //   width: 20,
  // },
});

const ChatHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box style={{ display: 'flex' }}>
        <Avatar style={{ width: 50, height: 50 }} />
        <Box>
          <Typography style={{ marginLeft: '16px' }} variant="subtitle1">
            Giorgi Janashia
          </Typography>
          <Typography
            style={{ marginLeft: '16px', color: '#286d00' }}
            variant="subtitle2"
          >
            Giorgi Typing...
          </Typography>
        </Box>
      </Box>
      <Box style={{ width: '300px' }} className={classes.listItem}>
        <Box>
          <AvatarGroup className={classes.groupAvatar} total={24}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <Avatar
              className={classes.avatar}
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
            />
            <Avatar
              className={classes.avatar}
              alt="Agnes Walker"
              src="/static/images/avatar/4.jpg"
            />
          </AvatarGroup>
        </Box>

        <List className={classes.listItem}>
          <ListItemButton
            sx={{
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '20px',
              height: 40,
              width: 50,
            }}
            className={classes.listItemButton}
          >
            <CallOutlined />
          </ListItemButton>
          <ListItemButton
            sx={{
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '20px',
              height: 40,
              width: 50,
            }}
            className={classes.listItemButton}
          >
            <VideocamOutlined />
          </ListItemButton>
          <ListItemButton
            sx={{
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '20px',
              height: 40,
              width: 50,
            }}
            className={classes.listItemButton}
          >
            <PendingOutlined />
          </ListItemButton>
        </List>
      </Box>
      {/* User/Group namnetstat -ltnp | grep -w ':80'e */}
      {/* Typing indicator */}
      {/* User/Group avatar or first letter */}
      {/* User badges (if group chat) */}
      {/* Call, video, and more icons */}
    </Box>
  );
};

export default ChatHeader;
