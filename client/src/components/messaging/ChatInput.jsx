import { makeStyles } from '@material-ui/core/styles';
import { InputBase, Box, IconButton } from '@material-ui/core';
import {
  Mic,
  PhotoCamera,
  SentimentVerySatisfiedRounded,
  LocationOn,
  InsertPhotoRounded,
  LocationOnOutlined,
  SentimentVerySatisfied,
  InsertPhotoOutlined,
  MicOutlined,
} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderRadius: 20,
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(1, 2),
  },
  iconButton: {
    padding: theme.spacing(1),
  },
}));

const ChatInput = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <IconButton className={classes.iconButton}>
        <MicOutlined />
      </IconButton>
      <InputBase
        placeholder="Type your message"
        className={classes.input}
        inputProps={{ 'aria-label': 'chat input' }}
      />
      <IconButton className={classes.iconButton}>
        <InsertPhotoOutlined />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <SentimentVerySatisfied />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <LocationOn />
      </IconButton>
    </Box>
  );
};

export default ChatInput;
