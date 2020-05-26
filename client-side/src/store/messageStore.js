import { observable, action, computed,
  decorate, runInAction, configure } from 'mobx';

// data
import api from '../api/api';

class MessageStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  // observables
  messageRegistry = new Map();
  hasInitialLoad = false;
  loading = false;
  activeMessage = undefined;
  submitting = false;
  hasSubmittedMessage = false;

  // computed
  get messages() {
    console.log('MessageStore.messages() getter called');
    return Array.from(this.messageRegistry.values());
  }

  // action
  loadMessages = async () => {
    console.log('MessageStore.loadMessages(): called')
    this.hasInitialLoad = true;
    this.loading = true;
    try {
      api.Messages.list()
        .then((response) => {
          response.forEach(message => {
            message.messageDate = message.messageDate.split('.')[0];
            this.messageRegistry.set(message.id, message);
          });
          this.loading = false;
          console.log('MessageStore.loadMessages(): successfully run')
        })
        .catch((error) => {
          this.loading = false;
          console.log('MessageStore.loadMessages(): Error loading messages has occured')
          console.log(error);
        });
    } catch (error) {
      this.loading = false;
      console.log('MessageStore.loadMessages(): Error loading messages has occured')
      console.log(error);
    }
  }


  // action
  createMessage = async (message) => {
    console.log('MessageStore.createMessage(): called')
    this.submitting = true;
    try {
      api.Messages.create(message)
        .then(() => {
          this.messageRegistry.set(message.id, message);
          this.hasSubmittedMessage = true;
          this.submitting = false;
          console.log('MessageStore.createMessage(): successfully run')
        })
        .catch((error) => {
          this.loading = false;
          console.log('MessageStore.loadMessages(): Error loading messages has occured')
          console.log(error);
        });
    } catch(error) {
      console.log('MessageStore.createMessage(): Error loading messages has occured')
      console.log(error)
      this.submitting = false;
    }
  }


  // action
  loadMessage = async (id) => {
    console.log(`MessageStore.loadMessage(): called with id ${id}`)
    this.loading = true;
    let message = this.getMessage(id);
    if (message) {
      this.activeMessage = message;
      this.loading = false;
      console.log('MessageStore.loadMessage(): successfully run')
    } else {
      try {
        api.Messages.details(id)
          .then((response) => {
            this.activeMessage = response;
            this.loading = false;
            console.log('MessageStore.loadMessage(): details() api called successfull')
          })
          .catch((error) => {
            this.loading = false;
            console.log('MessageStore.loadMessages(): Error loading messages has occured')
            console.log(error);
          });
      } catch (error) {
          console.log('MessageStore.loadMessage(): details() api FAILED')
          console.log(error);
          this.loading = false;
      }
    }
  }


  // action not needed because internal
  getMessage = (id) => {
    console.log(`MessageStore.getMessage(): called for id: ${id}`);
    return this.messageRegistry.get(id);
  }

  // action
  setActiveMessage = (id) => {
    console.log(`MessageStore.setActiveMessage(): called for id: ${id}`);
    this.loading = true;
    try {
      var i = this.getMessage(id);
      this.activeMessage = i;
      this.loading = false;
    } catch(error) {
      console.log(`MessageStore.setActiveMessage(): FAILED with id: ${id}`);
      console.log(error)
      this.loading = false;
    }
  }
}

decorate(MessageStore, {
  messageRegistry: observable,
  hasInitialLoad: observable,
  loading: observable,
  activeMessage: observable,
  submitting: observable,
  hasSubmittedMessage: observable,
  messages: computed,
  loadMessages: action,
  createMessage: action,
  loadMessage: action,
  setActiveMessage: action,
});

export default MessageStore;
