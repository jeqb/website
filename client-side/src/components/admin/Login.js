import React from 'react';

// styles and visuals
import { Container, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  field: {
    textAlign: 'center',
    padding: '1%'
  },
  buttonBox: {
    display: 'flex',
    direction: 'column',
    justifyContent: 'center'
  }
}));


const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography align="center">
        <h1>
          Login
        </h1>      
      </Typography>
      <form className={classes.form}>
        <div className={classes.field}>
          <TextField
            id="Username"
            label="Username"
            variant="outlined"
          />
        </div>
        <div className={classes.field}>
          <TextField
            id="Password"
            label="Password"
            variant="outlined"
          />
        </div>
        <div className={classes.buttonBox}>
          <Button variant="contained" size="large" color="primary">
            Login
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Login
