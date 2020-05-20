import { observable, action, computed, decorate } from 'mobx';
import { createContext } from 'react';

// data
import api from './api';

class MessageStore {
  // observables
  messageRegistry = new Map();
  loading = false;
  activeMessage = undefined;
  submitting = false;
  hasSubmittedMessage = false;

  // computed
  get messages() {
    return Array.from(this.messageRegistry.values());
  }

  // action
  loadMessages = async () => {
    this.loading = true;
    try {
      const messages = await api.Messages.list();
        messages.forEach(message => {
          message.messageDate = message.messageDate.split('.')[0];
          this.messageRegistry.set(message.id, message);
        });
        this.loading = false;
        console.log('MessageStore.loadMessages() has successfully run')
    } catch (error) {
        this.loading = false;
      console.log(error);
    }
  }


  // action
  createMessage = async (message) => {
    this.submitting = true;
    try {
      await api.Messages.create(message);
        this.messageRegistry.set(message.id, message);
        this.hasSubmittedMessage = true;
        this.submitting = false;
    } catch(error) {
      console.log(error)
      this.submitting = false;
    }
  }

  // action
  loadMessage = async (id) => {
    let message = this.getMessage(id);
    if (message) {
      this.activeMessage = message;
    } else {
      this.loading = true;
      try {
        message = await api.Messages.details(id);
          this.activeMessage = message;
          this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    }
  }

  // action not needed because internal
  getMessage = (id) => {
    return this.messageRegistry.get(id);
  }

  // action
  selectMessage = (id) => {
    this.loading = true;
    try {
      this.activeMessage = this.messageRegistry.get(id);
      console.log(`Message id: ${id} has been selected in the message store`)
      console.log(`The selectedMessage message is now: ${this.activeMessage}`)
      this.loading = false;
    } catch(error) {
      console.log(error)
      this.loading = false;
    }
  }
}

decorate(MessageStore, {
  messageRegistry: observable,
  loading: observable,
  activeMessage: observable,
  submitting: observable,
  hasSubmittedMessage: observable,
  messages: computed,
  loadMessages: action,
  createMessage: action,
  loadMessage: action,
  selectMessage: action,
});

export default createContext( new MessageStore() );
