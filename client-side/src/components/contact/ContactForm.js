import React, { useState, useContext } from 'react';

// styles and visuals
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// data
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../store/rootStore';


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
  const rootStore = useContext(RootStoreContext);
  const { createMessage } = rootStore.messageStore;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');


  const handleSubmit = () => {
    // submit to backend
    var message = {
      name: name,
      email: email,
      messageContent: messageContent
    }

    try {
      createMessage(message);
      console.log(`Message successfully submitted`);
    }
    catch(e) {
      console.log('Error occured trying to submit the message');
      console.log(e);
    }
  };

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
          onChange={e => setMessageContent(e.target.value)}
        />
      </div>
      <Button variant="contained" size="large" color="primary" onClick={() => handleSubmit()}>
        Submit
      </Button>
    </form>
  );
};

export default observer(ContactForm);
