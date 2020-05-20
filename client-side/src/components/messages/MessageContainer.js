import React, { useContext, useEffect } from 'react';

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

  if (messageStore.loading) {
    return <LoadingComp/>
  }

  if (messageStore.activeMessage === undefined) {
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <MessageList/>
        </Container>
      </React.Fragment>
    );
  }

  if (messageStore.activeMessage !== undefined) {
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <MessageDetails
            message={messageStore.activeMessage}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default observer(MessageContainer);
