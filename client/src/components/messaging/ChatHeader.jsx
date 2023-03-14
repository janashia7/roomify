import React from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { AvatarGroup } from '@mui/material';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    padding: '40px 20px',
  },
  groupAvatar: {
    '& .MuiAvatarGroup-avatar': {
      border: '2px solid #dbdad7 !important',
    },
  },
});

const ChatHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box style={{ display: 'flex' }}>
        <Avatar style={{ width: 50, height: 50 }} className={classes.avatar} />
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
      <Box>
        <AvatarGroup className={classes.groupAvatar} total={24}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
      {/* User/Group name */}
      {/* Typing indicator */}
      {/* User/Group avatar or first letter */}
      {/* User badges (if group chat) */}
      {/* Call, video, and more icons */}
    </Box>
  );
};

export default ChatHeader;
