import React, { useState, useEffect, useContext } from 'react';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { Container } from '@material-ui/core';

// components
import Header from './Components/layout/Header';
import BlogContainer from './Components/Blog/BlogContainer';
import About from './Components/static/About';
import Home from './Components/static/Home';
import Contact from './Components/Contact/Contact'

// data
import BlogPostCache from './Data/postCache';
import { observer } from 'mobx-react-lite';
import Login from './Components/Admin/Login';

const App = () => {
  const postCache = useContext(BlogPostCache)

  useEffect(() => {
    postCache.loadBlogPosts();
  }, [postCache]);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/admin' component={Login}/>
      </Container>
    </React.Fragment>
  );
}

export default withRouter(observer(App));
