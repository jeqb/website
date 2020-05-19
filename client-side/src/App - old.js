import React, { useState, useEffect, useContext } from 'react';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { Container } from '@material-ui/core';

// components
import Header from './Components/layout/Header';
import BlogContainer from './Components/Blog/BlogContainer';
import About from './Components/static/About';
import Home from './Components/static/Home';
import ContactContainer from './Components/Contact/contactContainer';
import MessageContainer from './Components/messages/messageContainer';
import MessageDetails from './Components/messages/messageDetails';

// data
import BlogPostCache from './Data/postCache';
import MessageCache from './Data/messageCache';
import { observer } from 'mobx-react-lite';
import Login from './Components/Admin/Login';

const App = () => {
  const postCache = useContext(BlogPostCache);
  const messageCache = useContext(MessageCache);


  return (
    <React.Fragment>
      <Header />
      <Container>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={ContactContainer}/>
        <Route path='/admin' component={Login}/>
        <Route exact path='/messages' component={MessageContainer}/>
        <Route exact path={`/messages/:id`} component={MessageDetails} />
      </Container>
    </React.Fragment>
  );
}

export default withRouter(observer(App));
