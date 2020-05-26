import React, { useContext } from 'react';

// components
import ContactFrom from './ContactForm';
import LoadingComp from '../layout/LoadingComponent';
import MessageSubmitted from '../static/MessageSubmitted';

// data
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../store/rootStore';

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
  const rootStore = useContext(RootStoreContext);
  const { submitting, hasSubmittedMessage } = rootStore.messageStore;
  const classes = useStyles();

  if (submitting) return <LoadingComp/>

  return (
    <Container className={classes.root}>
      <Typography align="center" variant="h3">
          Contact  
      </Typography>
      {
        hasSubmittedMessage  
          ? <MessageSubmitted/>
          : <ContactFrom/>
      }
    </Container>
  );
};

export default observer(ContactContainer);
