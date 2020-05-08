import { observable, action, computed, runInAction, decorate } from 'mobx';
import { createContext, SyntheticEvent } from 'react';
import api from './api';

class BlogPostCache {
  postRegistry = new Map();

  get blogPosts() {
    return Array.from(this.postRegistry.values());
  }

  loadBlogPosts = async () => {
    try {
      const blogPosts = await api.BlogPosts.list();
      runInAction('loading BlogPost Data', () => {
        blogPosts.forEach(post => {
          post.createdDateTime = post.createdDateTime.split('.')[0];
          this.postRegistry.set(post.id, post);
        });
      });
    } catch (error) {
      console.log(error)
    }
  };
};

decorate(BlogPostCache, {
  postRegistry: observable,
  blogPosts: computed,
  loadBlogPosts: action
});

export default createContext(new BlogPostCache() );
