import React, { useContext } from 'react';

// components
import MessagePreview from './MessagePreview';

// data
import { observer } from 'mobx-react-lite';
import MessageStore from '../store/messageStore';

const MessageList = () => {
  const messageStore = useContext(MessageStore);
  const { messages } = messageStore

  const onMessagePreviewClickHandler = (id) => {
    console.log(`Clicked message with id: ${id}`)
    messageStore.selectMessage(id)
  }

  return (
    <div>
      {
        messageStore.messages.map( (message) => {
          return(
            <MessagePreview
              key={message.id}
              id={message.id}
              name={message.name}
              email={message.email}
              messageContent={message.messageContent}
              messageDate={message.messageDate}
              onClickHandler={onMessagePreviewClickHandler}
            />
          )
        })
      }
    </div>
  )
};

export default observer(MessageList);
