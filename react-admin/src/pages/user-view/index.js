import React, { Component } from 'react'
// STORE
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestUser } from '@/store/actions'
// LAYOUT
import Layout from '@/layouts/default/index'

class Page extends Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    let self = this

    let id = self.props.match.params.id
    self.props.requestUser(id)
  }

  render() {
    let self = this

    return (
      <Layout>
        <div className="page page-user-view">
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
                    <legend>Personal Info:</legend>
                    <div className="form-group">
                      <label className="form-label">Fullname</label>
                      <input type="text" className="form-control-plaintext" value={ self.props.user.name } placeholder="Ex: Mai Anh Kha"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control-plaintext" value={ self.props.user.email } placeholder="Ex: maianhkha.dev@gmail.com"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input type="text" className="form-control-plaintext" placeholder="Ex: 01218455821"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Bio</label>
                      <textarea class="form-control-plaintext" rows="3"></textarea>
                    </div>
                  </fieldset>
                </div>
                <div className="col-xl-6">
                  <fieldset>
                    <legend>System:</legend>
                    <div className="form-group">
                      <label className="form-label">Username</label>
                      <input type="text" className="form-control" value={ self.props.user.name } placeholder="Ex: Mai Anh Kha"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Role</label>
                      <select class="form-control">
                        <option>Member</option>
                        <option>Leader</option>
                        <option>Director</option>
                      </select>
                    </div>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input"/>
                      <label class="form-check-label">Disable this user</label>
                    </div>
                  </fieldset>
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

const mapDispatchToProps = dispatch => bindActionCreators({ requestUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Page)
