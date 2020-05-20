import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response) => response.data;

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


export default {
  BlogPosts,
  Messages
}