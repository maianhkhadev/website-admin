import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
//PLUGINS
import store from './store'
//PAGES
import Signin from '@/pages/signin/index'
import Signup from '@/pages/signup/index'
import Home from '@/pages/home/index'
import Users from '@/pages/users/index'
import UserCreate from '@/pages/user-create/index'
import UserEdit from '@/pages/user-edit/index'
import UserView from '@/pages/user-view/index'
import Tasks from '@/pages/tasks/index'
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
          <Route path='/users' component={ Users }/>
          <Route path='/user/create' component={ UserCreate }/>
          <Route path='/user/:id/edit' component={ UserEdit }/>
          <Route path='/user/:id/view' component={ UserView }/>
          <Route path='/tasks' component={ Tasks }/>
          <Route path='/clients' component={ Clients }/>
          <Route component={ ErrorNotFound }/>
        </Switch>
      </Provider>
    )
  }
}

export default Root
