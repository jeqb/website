import React, { useContext } from 'react';

// components
import ContactFrom from './ContactForm';
import LoadingComp from '../layout/LoadingComponent';
import MessageSubmitted from '../static/MessageSubmitted';

// data
import { observer } from 'mobx-react-lite';
import MessageStore from '../store/messageStore';

// styles and visuals
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center'
  }
}));


const ContactContainer = () => {
  const messageStore = useContext(MessageStore);
  const classes = useStyles();

  if (messageStore.submitting) return <LoadingComp/>

  return (
    <Container className={classes.root}>
      <Typography align="center" variant="h3">
          Contact  
      </Typography>
      {
        messageStore.hasSubmittedMessage  
          ? <MessageSubmitted/>
          : <ContactFrom/>
      }
    </Container>
  );
};

export default observer(ContactContainer);
