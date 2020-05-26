import axios from 'axios';
import { history } from '../index.js';

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('jwt');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config
}, error => {
  return Promise.reject(error)
})


axios.interceptors.response.use(undefined, error => {
  console.log(error);
  // backend is down for sure
  if(error.message === "Network Error"){
    history.push('/InternalServerError');
  }

  // backend is alive and we got a status code.
  const { status } = error.response;

  if(status === 400) {
    history.push('/badrequest');
  }

  if(status === 401) {
    history.push('/Unauthorized');
  }

  if(status === 404) {
    history.push('/NotFound');
  }

  if(status >= 500) {
    history.push('/InternalServerError');
  }

});

const responseBody = (response) => response.data

const sleep = (ms) => (response) =>
  new Promise(resolve => setTimeout(() => resolve(response), ms));

const requests = {
  get: (url) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url, body) => axios.post(url, body).then(sleep(1000)).then(responseBody),
  put: (url, body) => axios.put(url, body).then(sleep(1000)).then(responseBody),
  delete: (url) => axios.delete(url).then(sleep(1000)).then(responseBody)
};

const BlogPosts = {
  list: () => requests.get('/BlogPosts'),
  details: (id) => requests.get(`/BlogPosts/${id}`),
  create: (blogPost) => requests.post('/BlogPosts', blogPost),
  update: (blogPost) => requests.put(`/BlogPosts/${blogPost.id}`, blogPost),
  delete: (id) => requests.delete(`/BlogPosts/${id}`)
};

const Messages = {
  list: () => requests.get('/Messages'),
  details: (id) => requests.get(`/Messages/${id}`),
  create: (message) => requests.post('/Messages', message),
  delete: (id) => requests.delete(`/Messages/${id}`)
}

const User = {
  login: (credentials) => requests.post('/user/login', credentials)
}

export default {
  BlogPosts,
  Messages,
  User
}