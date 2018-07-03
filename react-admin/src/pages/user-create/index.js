import React, { Component } from 'react'
// STORE
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { storeUser } from '@/store/actions'
// LAYOUT
import Layout from '@/layouts/default/index'

class Page extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let self = this
  }

  handleSubmit(e) {
    let self = this
    e.preventDefault();

    self.props.storeUser(self.state.user)
  }

  render() {
    let self = this

    return (
      <Layout>
        <div className="page page-user-create">
          <div className="container">
            <div className="page-header">
              <div className="title">Edit User</div>

              <nav className="block-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Library</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
            <form className="form" onSubmit={ self.handleSubmit }>
              <div className="row">
                <div className="col-xl-6">
                  <fieldset>
                    <legend>System:</legend>
                    <div className="form-group">
                      <label className="form-label">Username</label>
                      <input type="text" className="form-control" value={ self.props.user.name } placeholder="Ex: Mai Anh Kha"/>
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                      <label>Confirm Password</label>
                      <input type="password" class="form-control" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Role</label>
                      <select class="form-control">
                        <option>Member</option>
                        <option>Leader</option>
                        <option>Director</option>
                      </select>
                    </div>
                  </fieldset>
                </div>
                <div className="col-xl-12">
                  <div className="mt-5">
                    <button className="btn btn-blue">Update</button>
                    <button className="btn btn-silver">Cancel</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({ user: state.UserReducer })

const mapDispatchToProps = dispatch => bindActionCreators({ storeUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Page)
