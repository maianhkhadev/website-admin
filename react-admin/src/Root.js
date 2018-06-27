import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
//PLUGINS
import store from './store'
//PAGES
import Signin from '@/pages/signin/index'
import Signup from '@/pages/signup/index'
import Home from '@/pages/home/index'
import Invoices from '@/pages/invoices/index'
import Users from '@/pages/users/index'
import Clients from '@/pages/clients/index'
import ErrorNotFound from '@/pages/error-not-found/index'

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Switch>
          <Route path='/signin' component={ Signin }/>
          <Route path='/signup' component={ Signup }/>
          <Route exact path='/' component={ Home }/>
          <Route path='/invoices' component={ Invoices }/>
          <Route path='/users' component={ Users }/>
          <Route path='/clients' component={ Clients }/>
          <Route component={ ErrorNotFound }/>
        </Switch>
      </Provider>
    )
  }
}

export default Root
