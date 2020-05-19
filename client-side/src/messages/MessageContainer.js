import React, { useContext } from 'react';

// components
import Container from '@material-ui/core/Container';
import LoadingComp from '../layout/LoadingComponent';
import MessageList from './MessageList';
import MessageDetails from './MessageDetails';

// data
import { observer } from 'mobx-react-lite';
import MessageStore from '../store/messageStore';

const MessageContainer = () => {
  const messageStore = useContext(MessageStore);

  if (messageStore.loading) {
    return <LoadingComp/>
  }

  if (messageStore.selectedMessage === undefined) {
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <MessageList/>
        </Container>
      </React.Fragment>
    );
  }

  if (messageStore.selectedMessage !== undefined) {
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <MessageDetails
            message={messageStore.selectedMessage}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default observer(MessageContainer);
