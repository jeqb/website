import React, { useState, useEffect, useContext } from 'react';

// components
import Header from './Components/Header';
import BlogContainer from './Components/Blog/BlogContainer';

// data
import BlogPostCache from './Data/postCache';
import { observer } from 'mobx-react-lite';

const App = () => {
  const postCache = useContext(BlogPostCache)

  useEffect(() => {
    postCache.loadBlogPosts();
  }, [postCache]);

  return (
    <React.Fragment>
      <Header/>
      <BlogContainer/>
    </React.Fragment>
  );
}

export default observer(App);
