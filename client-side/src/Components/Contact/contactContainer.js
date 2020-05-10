import React, { useState, setState } from 'react';

// components
import ContactFrom from './contactForm';

// styles and visuals
import { Container, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center'
  }
}));


const ContactContainer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography align="center">
        <h1>
          Contact
        </h1>      
      </Typography>
      <ContactFrom/>
    </Container>
  );
};

export default ContactContainer;
