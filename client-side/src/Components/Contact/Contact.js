import React from 'react';

// styles and visuals
import { Container, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center'
  },
  form: {
    alignItems: 'center'
  },
  field: {
    textAlign: 'center',
    padding: '1%'
  },
  Button: {
    alignContent: 'center'
  }
}));


const Contact = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography align="center">
        <h1>
          Contact
        </h1>      
      </Typography>
      <form className={classes.form}>
          <TextField
            className={classes.field}
            id="Name"
            label="Name"
            variant="outlined"
          />
          <TextField
            className={classes.field}
            id="Email"
            label="Email"
            variant="outlined"
          />
        <div className={classes.field}>
          <TextField
            id="Message"
            label="Message here"
            type="Text Area"
            variant="outlined"
            multiline
            rows={10}
            fullWidth={true}
          />
        </div>
        <Button variant="contained" size="large" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
