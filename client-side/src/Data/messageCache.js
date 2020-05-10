import { observable, action, computed, runInAction, decorate } from 'mobx';
import { createContext } from 'react';
import api from './api';

class MessageCache {
  messageRegistry = new Map();
  submitting = false;

  get Messages() {
    return Array.from(this.messageRegistry.values());
  }

  loadMessages = async () => {
    try {
      const Messages = await api.Messages.list();
      runInAction('loading BlogPost Data', () => {
        Messages.forEach(message => {
          message.messageDate = message.messageDate.split('.')[0];
          this.messageRegistry.set(message.id, message);
        });
      });
    } catch (error) {
      console.log('Error at loadMessages: ')
      console.log(error)
    }
  };

  createMessage = async (message) => {
    this.submitting = true;
    try {
      await api.Messages.create(message);
      runInAction('Submitting message', () => {
        this.messageRegistry.set(message.id, message);
        this.submitting = false;
      })
    } catch (error) {
      runInAction('Message creation error', () => {
        this.submitting = false;
      })
      console.log('Error at createMessages: ')
      console.log(error);
    }
  };

  deleteMessage = async (id) => {
    this.submitting = true;
    try {
      await api.Messages.delete(id);
      runInAction('Deleting Message', () => {
        this.messageRegistry.delete(id);
        this.submitting = false;
      })
    } catch (error) {
      runInAction('message Delete error', () => {
        this.submitting = false;
      })
      console.log(error);
    }
  };

}

decorate(MessageCache, {
  messageRegistry: observable,
  submitting: observable,
  Messages: computed,
  loadMessages: action,
  createMessage: action,
  deleteMessage: action
});

export default createContext(new MessageCache() );
