import React, { useState, setState } from 'react';

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


const ContactForm = () => {
  const classes = useStyles();
  const [submit, setSubmit] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('name');
    console.log(name);

    console.log('email');
    console.log(email);

    console.log('message');
    console.log(message);
    setSubmit(1)
  };

  switch(submit) {
    case 0:
      return (
        <form className={classes.form}>
          <TextField
            className={classes.field}
            id="Name"
            label="Name"
            variant="outlined"
            onChange={e => setName(e.target.value)}
          />
          <TextField
            className={classes.field}
            id="Email"
            label="Email"
            variant="outlined"
            onChange={e => setEmail(e.target.value)}
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
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <Button variant="contained" size="large" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      );
    case 1:
      return (
        <Typography align="center">
          <h1>
            Thank you for your message.
          </h1>
          <h1>
            The admin will reach out to you shortly.     
          </h1>
        </Typography>
      );
  }
};

export default ContactForm;
