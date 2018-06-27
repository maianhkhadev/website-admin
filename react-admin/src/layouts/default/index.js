import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Layout extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    let self = this
    return (
      <div className="layout-default">
        <header>
          <nav className="navbar navbar-expand-xl">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src={require('assets/images/logo.png')} alt="" />
              </Link>

              <div ref="icon" className="nav-icon" data-toggle="collapse" data-target="#navbarText">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/invoices">Invoices</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/clients">Clients</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="main">
          {self.props.children}
        </main>
      </div>
    )
  }
}

export default Layout
