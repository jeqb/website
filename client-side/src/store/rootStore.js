import { createContext } from 'react';
import { observable, action, computed, decorate, configure, runInAction } from 'mobx';

import UserStore from './userStore';
import MessageStore from './messageStore';
import BlogPostStore from './blogPostStore';

export class RootStore {
  constructor() {
    this.userStore = new UserStore(this)
    this.messageStore = new MessageStore(this)
  }

  setToken = (token) => {
    window.localStorage.setItem('jwt', token);
    this.token = token;
  }

}

decorate(RootStore, {
  userStore: observable,
  messageStore: observable,
  setToken: action,
})

export const RootStoreContext = createContext(new RootStore());
