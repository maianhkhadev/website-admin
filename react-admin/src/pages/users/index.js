import React, { Component } from 'react'
// ROUTE
import { Link } from 'react-router-dom'
// STORE
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestUsers } from '@/store/actions'
// LAYOUT
import Layout from '@/layouts/default/index'

class Page extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestUsers()
  }

  render() {
    let self = this

    return (
      <Layout>
        <div className="page page-users">
          <div className="container">
            <div className="page-header">
              <div className="row">
                <div className="col-xl-5 col-9">
                  <div className="block-search">
                    <img className="icon" src={ require('assets/images/icon-search.png') } alt="" />
                    <input type="text" className="form-control" placeholder="Type to search..." />
                  </div>
                </div>
                <div className="col-xl-7 col-3 text-right">
                  <Link className="btn btn-blue" to="/user/create">
                    Add Client
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="block-table block-table-users">
                  <div className="block-header">
                    <a>Name</a>
                    <a>Email</a>
                    <a>Phone</a>
                    <a></a>
                  </div>
                  <div className="block-content">
                  {
                    self.props.users.map((user) => {
                      return (
                        <div className="block-table-row block-table-row-user" key={ user.id }>
                          <span>{ user.name }</span>
                          <span>{ user.email }</span>
                          <span>{ user.phone }</span>
                          <span>
                            <Link className="icon" to={`/user/${user.id}/view`}>
                              <img className="" src={ require('assets/images/block-table/icon-view.png') } alt=""/>
                            </Link>
                            <Link className="icon" to={`/user/${user.id}/edit`}>
                              <img className="" src={ require('assets/images/block-table/icon-edit.png') } alt=""/>
                            </Link>
                            <a className="icon" href="#">
                              <img className="" src={ require('assets/images/block-table/icon-delete.png') } alt=""/>
                            </a>
                          </span>
                        </div>
                      )
                    })
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({ users: state.UsersReducer })

const mapDispatchToProps = dispatch => bindActionCreators({ requestUsers }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Page)
