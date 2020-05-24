import React from 'react';
import { Button, Container } from '@material-ui/core';
import { history } from '../../index.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%'
  },
}));

const InternalServerError = () => {
  const classes = useStyles();

  const onClickHandler = () => {
    history.push('/');
  }
  
  return (
    <Container maxWidth="md" className={classes.container}>
      <h1>
        500 INTERNAL SERVER ERROR
      </h1>
      <Button variant="contained" color="primary" onClick={() => onClickHandler()}>
        Return to Home page
      </Button>
    </Container>
  )
}

export default InternalServerError;
