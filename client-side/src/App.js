import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';

// components
import Header from './layout/Header';
import MessageContainer from './messages/MessageContainer';
import MessageDetails from './messages/MessageDetails';
import Login from './admin/Login';
import Home from './static/Home';
import About from './static/About';
import ContactContainer from './contact/ContactContainer';

// data
import { observer } from 'mobx-react-lite';

const App = () => {

  return (
    <React.Fragment>
      <Header/>
      <Container>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={ContactContainer}/>
        <Route path='/admin' component={Login}/>
        <Route exact path='/messages' component={MessageContainer}/>
        <Route path='/messages/:id' component={MessageDetails}/>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(observer(App));
