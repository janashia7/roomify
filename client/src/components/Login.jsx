import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Link,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      if (resp.data.success) {
        localStorage.setItem('token', resp.data.data);
        navigate('/chat');
      }
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {message && (
          <Typography variant="subtitle1" color="error">
            {message}
          </Typography>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container justifyContent="flex-end" spacing={1}>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Don't have an account?
            </Typography>
          </Grid>
          <Grid item>
            <Link
              href="/register"
              variant="body2"
              color="primary"
              underline="none"
            >
              Sign up
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
