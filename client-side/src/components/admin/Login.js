import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { history } from '../../index.js';

// styles and visuals
import { Container, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// components
import LoadingComponent from '../layout/LoadingComponent';

// data
import { RootStoreContext } from '../../store/rootStore';
import { observer } from 'mobx-react-lite';


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
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const classes = useStyles();
  const rootStore = useContext(RootStoreContext);
  const { loggingIn, login, token } = rootStore.userStore;

  const onClickHandler = () => {
    const payload = {
      Email: email,
      Password: password
    };

    login(payload)
  }

  if (loggingIn) return <LoadingComponent/>

  if (token !== undefined) history.push('/');

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
            id="Email"
            label="Email"
            variant="outlined"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.field}>
          <TextField
            id="Password"
            label="Password"
            type="password"
            variant="outlined"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.buttonBox}>
          <Button variant="contained" size="large" color="primary" onClick={() => onClickHandler()}>
            Login
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default withRouter(observer(Login));
