import React, { useEffect, useContext } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';

// components
import Header from './layout/Header';
import MessageContainer from './messages/MessageContainer';
import BlogContainer from './blog/BlogContainer';
import ContactContainer from './contact/ContactContainer';
import LoadingComp from './layout/LoadingComponent';

// data
import api from './store/api';
import MessageStore from './store/messageStore';
import BlogPostStore from './store/blogPostStore';
import { observer } from 'mobx-react-lite';

const App = () => {
  const messageStore = useContext(MessageStore);
  const blogPostStore = useContext(BlogPostStore);

  useEffect(() => {
    blogPostStore.loadBlogPosts();

    messageStore.loadMessages();
  }, [blogPostStore, messageStore]);

  return (
    <React.Fragment>
      <Header/>
      <Container>
        
      </Container>
      {/**
      <ContactContainer
        handleCreateMessage={handleCreateMessage}
      />
      **/}
      {/**
      <BlogContainer
        blogPosts={blogPostStore.blogPosts}
        handleSelectBlogPost={handleSelectBlogPost}
      />
      **/}
      
      <MessageContainer/>
      
    </React.Fragment>
  )
}

export default withRouter(observer(App));
