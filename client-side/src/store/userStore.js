import { observable, action, computed, decorate, configure, runInAction } from 'mobx';
import { createContext } from 'react';

// data
import api from '../api/api';

configure({ enforceActions: 'observed' });

class UserStore {
  // observables
  userData = undefined;
  loggingIn = false;

  // action
  login = async (credentials) => {
    runInAction(() => {
      this.loggingIn = true;
    });
    try {
      const response = await api.User.login(credentials);
      runInAction(() => {
        this.userData = response;
        this.loggingIn = false;
        console.log('UserStore.login(): Successful login');
      });
    } catch (error) {
      runInAction(() => {
        this.loggingIn = false;
        console.log('UserStore.login(): failed to log in')
        console.log(error)
      })
    }
  }

  // computed
  get token() {
    if (this.userData !== undefined){
      return this.userData.token;
    } else {
      return undefined;
    }
  }

  // computed
  get displayName() {
    return this.userData.displayName;
  }
}

decorate(UserStore, {
  userData: observable,
  loggingIn: observable,
  login: action,
  token: computed,
  displayName: computed,
})

export default createContext( new UserStore() );