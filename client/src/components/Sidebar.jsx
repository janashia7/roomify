import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import {
  ChatBubbleOutline as ChatIcon,
  HomeOutlined as HomeIcon,
  EventNoteOutlined as ReminderIcon,
  InsertDriveFileOutlined as FileIcon,
  PersonAddOutlined as AddContactIcon,
  VideocamOutlined as VideoCameraIcon,
  CameraAltOutlined as CameraIcon,
  SettingsOutlined as SettingsIcon,
} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: 80,
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    position: 'fixed',
    left: 0,
    top: 0,
  },
  sidebarLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
    backgroundColor: '#f2f2f2',
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: '25%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconListWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  bottomIconWrapper: {
    paddingTop: 'auto',
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  settingsIconWrapper: {
    marginTop: 'auto',
    paddingTop: 20,
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sidebar}>
      <Box className={classes.sidebarLogo}>
        <Typography variant="h6">Logo</Typography>
      </Box>
      <List>
        <ListItemButton
          sx={{ justifyContent: 'center' }}
          className={classes.iconWrapper}
        >
          <ListItemIcon className={classes.iconListWrapper}>
            <ChatIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          sx={{ justifyContent: 'center' }}
          className={classes.iconWrapper}
        >
          <ListItemIcon className={classes.iconListWrapper}>
            <HomeIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          sx={{ justifyContent: 'center' }}
          className={classes.iconWrapper}
        >
          <ListItemIcon className={classes.iconListWrapper}>
            <ReminderIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          sx={{ justifyContent: 'center' }}
          className={classes.iconWrapper}
        >
          <ListItemIcon className={classes.iconListWrapper}>
            <FileIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          sx={{ justifyContent: 'center' }}
          className={classes.iconWrapper}
        >
          <ListItemIcon className={classes.iconListWrapper}>
            <AddContactIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          sx={{ justifyContent: 'center' }}
          className={classes.iconWrapper}
        >
          <ListItemIcon className={classes.iconListWrapper}>
            <VideoCameraIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          sx={{ justifyContent: 'center' }}
          className={classes.iconWrapper}
        >
          <ListItemIcon className={classes.iconListWrapper}>
            <CameraIcon />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Box className={classes.settingsIconWrapper}>
        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon className={classes.iconWrapper}>
            <SettingsIcon />
          </ListItemIcon>
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
