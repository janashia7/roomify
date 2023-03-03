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

const Register = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
        full_name: fullName,
      });

      if (resp.data.success) {
        navigate('/');
      }
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Grid>
        </Grid>
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
          Create Account
        </Button>
        <Grid container justifyContent="flex-end" spacing={1}>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Already have an account?
            </Typography>
          </Grid>
          <Grid item>
            <Link
              href="/login"
              variant="body2"
              color="primary"
              underline="none"
            >
              Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
