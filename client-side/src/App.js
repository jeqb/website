import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

// components
import Header from './components/layout/Header';
import MessageContainer from './components/messages/MessageContainer';
import MessageDetails from './components/messages/MessageDetails';
import Login from './components/admin/Login';
import Home from './components/static/Home';
import About from './components/static/About';
import ContactContainer from './components/contact/ContactContainer';
import NotFound from './components/static/NotFound';
import BadRequest from './components/static/BadRequest';
import Unauthorized from './components/static/Unauthorized';
import InternalServerError from './components/static/InternalServerError';

// data
import { observer } from 'mobx-react-lite';

const App = () => {

  return (
    <React.Fragment>
      <Header/>
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={ContactContainer}/>
          <Route path='/admin' component={Login}/>
          <Route exact path='/messages' component={MessageContainer}/>
          <Route path='/messages/:id' component={MessageDetails}/>
          <Route path='/badrequest' component={BadRequest}/>
          <Route path='/unauthorized' component={Unauthorized} />
          <Route path='/internalservererror' component={InternalServerError} />
          {/* catch all for anything not found */}
          <Route component={NotFound}/>
        </Switch>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(observer(App));
