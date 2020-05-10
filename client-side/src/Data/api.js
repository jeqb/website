import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.get(url).then(responseBody)
};

const BlogPosts = {
  list: () => requests.get('/BlogPosts'),
  details: (id) => requests.post(`/BolgPosts/${id}`),
  create: (blogPost) => requests.post('/BolgPosts', blogPost),
  update: (blogPost) => requests.put(`/BolgPosts/${blogPost.id}`, blogPost),
  delete: (id) => requests.post(`/BolgPosts/${id}`)
};

const Messages = {
  list: () => requests.get('/Messages'),
  details: (id) => requests.post(`/Messages/${id}`),
  create: (message) => requests.post('/Messages', message),
  delete: (id) => requests.post(`/Messages/${id}`)
}


export default {
  BlogPosts,
  Messages
}