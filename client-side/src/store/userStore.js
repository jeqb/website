import { observable, action, computed, decorate, configure, runInAction } from 'mobx';

// data
import api from '../api/api';

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  // observables
  token = undefined;
  userData = undefined;
  loggingIn = false;

  // action
  login = async (credentials) => {
    console.log('UserStore.login(): begin login attempt');
    this.loggingIn = true;
    try {
     api.User.login(credentials)
      .then((response) => {
        if (response !== undefined) {
          this.userData = response;
          // set local token
          this.setToken(response.token);
          // set token in root store as well
          this.rootStore.setToken(response.token);
          this.loggingIn = false;
          console.log('UserStore.login(): Successful login');
        } else {
          throw "UserStore.Login(): Failed. the response was undeinfed"
        }
      })
      .catch((error) => {
        this.loggingIn = false;
        console.log('UserStore.login(): failed to log in')
        console.log(error)        
      })
    } catch (error) {
      this.loggingIn = false;
      console.log('UserStore.login(): failed to log in')
      console.log(error)
    }
  }

  setToken = (token) => {
    this.token = token;
  } 
  
  // computed
  get displayName() {
    return this.userData.displayName;
  }
}

decorate(UserStore, {
  userData: observable,
  token: observable,
  setToken: action,
  loggingIn: observable,
  login: action,
  displayName: computed,
})

export default UserStore;