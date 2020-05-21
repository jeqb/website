import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

// components
import MessagePreview from './MessagePreview';

// data
import { observer } from 'mobx-react-lite';
import MessageStore from '../../store/messageStore';

const MessageList = () => {
  console.log('MessageList rendered')
  const messageStore = useContext(MessageStore);
  const { messages } = messageStore

  return (
    <div>
      {
        messages.map( (message) => {
          return(
            <MessagePreview
              key={message.id}
              id={message.id}
              name={message.name}
              email={message.email}
              messageContent={message.messageContent}
              messageDate={message.messageDate}
            />
          )
        })
      }
    </div>
  )
};

export default withRouter(observer(MessageList));
