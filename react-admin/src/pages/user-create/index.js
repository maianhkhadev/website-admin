import React, { Component } from 'react'
// STORE
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { storeUser } from '@/store/actions'
// LAYOUT
import Layout from '@/layouts/default/index'
// PLUGINS
import Validation from '@/plugins/validation'

class Page extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      user: {
        email: '',
        password: ''
      },
      fields: [
        {
          name: 'email',
          rules: {
            required: true,
            email: true
          }
        }, {
          name: 'password',
          rules: {
            required: true,
          }
        }, {
          name: 'confirmPassword',
          rules: {
            equalTo: 'password'
          }
        }
      ]
    }
  }

  componentDidMount() {
    let self = this

    let form = self.refs.form
    form.validation = new Validation(form, self.state.fields)
  }

  handleChange({ target }) {
    let self = this

    let user = { ...self.state.user, [target.name]: target.value }

    self.setState({ user })
  }

  handleSubmit(e) {
    let self = this
    e.preventDefault()

    let form = self.refs.form
    let hasError = form.validation.checkValid()

    if(hasError === false)
      self.props.storeUser(self.state.user)
  }

  render() {
    let self = this

    return (
      <Layout>
        <div className="page page-user-create">
          <div className="container">
            <div className="page-header">
              <div className="title">Create User</div>

              <nav className="block-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Users</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Create</li>
                </ol>
              </nav>
            </div>
            <form ref="form" className="form" onSubmit={ self.handleSubmit }>
              <div className="row">
                <div className="col-xl-6">
                  <fieldset>
                    <legend>System:</legend>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input name="email" type="email" className="form-control" onChange={ self.handleChange } placeholder="Ex: Mai Anh Kha"/>
                      <span className="error"></span>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input name="password" type="password" className="form-control" onChange={ self.handleChange } placeholder="Password"/>
                      <span className="error"></span>
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input name="confirmPassword" type="password" className="form-control" onChange={ self.handleChange } placeholder="Confirm Password"/>
                      <span className="error"></span>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Role</label>
                      <select name="roleId" className="form-control" onChange={ self.handleChange }>
                        <option value="1">Member</option>
                        <option value="2">Leader</option>
                        <option value="3">Director</option>
                      </select>
                    </div>
                  </fieldset>
                </div>
                <div className="col-xl-12">
                  <div className="mt-5">
                    <button className="btn btn-blue" formNoValidate>Update</button>
                    <button className="btn btn-silver" formNoValidate>Cancel</button>
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
