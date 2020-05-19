import { observable, action, computed, runInAction, decorate, configure } from 'mobx';
import { createContext } from 'react';

// data
import api from './api';

class MessageStore {
  messages = [];
  loading = false;
  selectedMessage = undefined;
  submitting = false;
  hasSubmittedMessage = false;

  loadMessages = async () => {
    this.loading = true;
    try {
      const messages = await api.Messages.list();
      messages.forEach(message => {
        message.messageDate = message.messageDate.split('.')[0];
        this.messages.push(message);
          
      })
      this.loading = false;
    } catch (error) {
      console.log(error)
      this.loading = false;
    }
  }

  createMessage = async (message) => {
    this.submitting = true;
    try {
      await api.Messages.create(message);
        this.messages.push(message);
        this.hasSubmittedMessage = true;
        this.submitting = false;
    } catch(error) {
      console.log(error)
      this.submitting = false;
    }
  }

  selectMessage = (id) => {
    this.loading = true;
    try {
      this.selectedMessage = this.messages.find(a => a.id === id);
      console.log(`Message id: ${id} has been selected in the message store`)
      this.loading = false;
    } catch(error) {
      console.log(error)
      this.loading = false;
    }
  }

}

decorate(MessageStore, {
  messages: observable,
  loading: observable,
  selectedMessage: observable,
  submitting: observable,
  hasSubmittedMessage: observable,
  loadMessages: action,
  selectMessage: action,
});

export default createContext( new MessageStore() );
