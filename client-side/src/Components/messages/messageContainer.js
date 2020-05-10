import React, { useContext } from 'react';

// components
import MessagePreview from './messagePreview'
import { observer } from 'mobx-react-lite';
import Container from '@material-ui/core/Container';

// data
import MessageCache from '../../Data/messageCache';


const MessageContainer = () => {
  const messageCache = useContext(MessageCache);

  return (
    <React.Fragment>
      <Container maxWidth="md">
        {
          messageCache.Messages.map( (message) => {
            return(
              <MessagePreview
                key={message.id}
                Name={message.name}
                Email={message.email}
                MessageContent={message.messageContent}
                MessageDate={message.messageDate}
              />
            )
          })
        }
      </Container>
    </React.Fragment>
  );
};

export default observer(MessageContainer);
