import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// components
import Container from '@material-ui/core/Container';
import LoadingComp from '../layout/LoadingComponent';
import MessageList from './MessageList';
import MessageDetails from './MessageDetails';

// data
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../store/rootStore';

const MessageContainer = () => {
  const rootStore = useContext(RootStoreContext);
  const { loadMessages, loading } = rootStore.messageStore

  useEffect(() => {
    loadMessages();
  },[loadMessages]);

  if (loading) return <LoadingComp/>

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <MessageList/>
      </Container>
    </React.Fragment>
  );
}

export default withRouter(observer(MessageContainer));
