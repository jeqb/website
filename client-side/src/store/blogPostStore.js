import { observable, action, computed, runInAction, decorate } from 'mobx';
import { createContext } from 'react';

// data
import api from './api';


class BlogPostStore {
  blogPosts = [];
  loadingInitial = false;

  loadBlogPosts = () => {
    this.loadingInitial = true;
    api.BlogPosts.list()
      .then(posts => {
        posts.forEach(post => {
        post.createdDateTime = post.createdDateTime.split('.')[0];
        if (post.updatedDateTime != null) {
          post.updatedDateTime = post.updatedDateTime.split('.')[0];
        }
        this.blogPosts.push(post);
      })
    }).finally(() => this.loadingInitial = false);
  }

}

decorate(BlogPostStore, {
  blogPosts: observable,
  loadingInitial: observable,
  loadBlogPosts: action
});

export default createContext(new BlogPostStore());
