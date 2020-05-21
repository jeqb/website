import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// components
import Container from '@material-ui/core/Container';
import LoadingComp from '../layout/LoadingComponent';
import MessageList from './MessageList';
import MessageDetails from './MessageDetails';

// data
import { observer } from 'mobx-react-lite';
import MessageStore from '../../store/messageStore';

const MessageContainer = () => {
  const messageStore = useContext(MessageStore);

  useEffect(() => {
    messageStore.loadMessages();
  },[messageStore]);

  if (messageStore.loading) return <LoadingComp/>

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <MessageList/>
      </Container>
    </React.Fragment>
  );
}

export default withRouter(observer(MessageContainer));
