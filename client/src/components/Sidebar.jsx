import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, List, ListItemButton, ListItemIcon } from '@mui/material';
import logo from '../images/logo.png';
import {
  ForumRounded as ChatIcon,
  HomeRounded as HomeIcon,
  ExtensionRounded as QuizIcon,
  DescriptionRounded as FileIcon,
  PersonAddAlt1Rounded as AddContactIcon,
  VideocamRounded as VideoCameraIcon,
  CameraAltRounded as CameraIcon,
  SettingsRounded as SettingsIcon,
} from '@mui/icons-material';
import { Divider } from '@material-ui/core';
import { Link, Outlet } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: 80,
    height: '100vh',
    // backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    position: 'fixed',
    left: 0,
    top: 0,
  },
  sidebarLogo: {
    marginTop: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },

  list: {
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconListWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: { backgroundColor: 'black' },
  settingsIconWrapper: {
    display: 'flex',
    paddingBottom: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <Box sx={{ flexDirection: 'row' }}>
      <Box className={classes.sidebar}>
        <Box className={classes.sidebarLogo}>
          <img width={100} src={logo} alt="Logo" />
        </Box>
        <Divider />
        <List className={classes.list}>
          <ListItemButton
            sx={{
              justifyContent: 'center',
              borderRadius: '20px',
              width: 50,
              maxHeight: 40,
            }}
            className={classes.iconWrapper}
            component={Link}
            to="messaging"
            onClick={() => handleButtonClick(0)}
          >
            <ListItemIcon className={classes.iconListWrapper}>
              <ChatIcon sx={activeButton === 0 && { color: 'black' }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            sx={{
              justifyContent: 'center',
              borderRadius: '20px',
              width: 50,
              maxHeight: 40,
            }}
            className={classes.iconWrapper}
            onClick={() => handleButtonClick(1)}
          >
            <ListItemIcon className={classes.iconListWrapper}>
              <HomeIcon sx={activeButton === 1 && { color: 'black' }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            sx={{
              justifyContent: 'center',
              borderRadius: '20px',
              width: 50,
              maxHeight: 40,
            }}
            className={classes.iconWrapper}
            onClick={() => handleButtonClick(2)}
          >
            <ListItemIcon className={classes.iconListWrapper}>
              <QuizIcon sx={activeButton === 2 && { color: 'black' }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            sx={{
              justifyContent: 'center',
              borderRadius: '20px',
              width: 50,
              maxHeight: 40,
            }}
            className={classes.iconWrapper}
            onClick={() => handleButtonClick(3)}
          >
            <ListItemIcon className={classes.iconListWrapper}>
              <FileIcon sx={activeButton === 3 && { color: 'black' }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            sx={{
              justifyContent: 'center',
              borderRadius: '20px',
              width: 50,
              maxHeight: 40,
            }}
            className={classes.iconWrapper}
            onClick={() => handleButtonClick(4)}
          >
            <ListItemIcon className={classes.iconListWrapper}>
              <AddContactIcon sx={activeButton === 4 && { color: 'black' }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            sx={{
              justifyContent: 'center',
              borderRadius: '20px',
              width: 50,
              maxHeight: 40,
            }}
            className={classes.iconWrapper}
            onClick={() => handleButtonClick(5)}
          >
            <ListItemIcon className={classes.iconListWrapper}>
              <VideoCameraIcon sx={activeButton === 5 && { color: 'black' }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            sx={{
              justifyContent: 'center',
              borderRadius: '20px',
              width: 50,
              maxHeight: 40,
            }}
            className={classes.iconWrapper}
            onClick={() => handleButtonClick(6)}
          >
            <ListItemIcon className={classes.iconListWrapper}>
              <CameraIcon sx={activeButton === 6 && { color: 'black' }} />
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Box className={classes.settingsIconWrapper}>
          <ListItemButton
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px',
              maxWidth: 50,
              maxHeight: 40,
            }}
            onClick={() => handleButtonClick(7)}
          >
            <ListItemIcon className={classes.iconListWrapper}>
              <SettingsIcon
                sx={activeButton === 7 && { color: 'black' }}
              />
            </ListItemIcon>
          </ListItemButton>
        </Box>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Sidebar;
