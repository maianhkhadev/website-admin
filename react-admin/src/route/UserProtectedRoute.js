import React, { Component } from 'react'
import { Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class ProtectedRoute extends Component {

  constructor(props) {
    super(props)

    this.state = {
      status: 0
    }
  }

  componentDidMount() {
    let self = this

    setTimeout(function () {
      self.state = 1
    }, 1000)
  }

  render() {
    let self = this

    return (
      <Route
        render={ self.state.status === 1 ?
          (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )
  }
}

export default ProtectedRoute
