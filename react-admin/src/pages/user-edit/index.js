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
        <div className="page page-user-edit">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <form className="form">
                  <fieldset>
                    <legend>Personalia:</legend>
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" placeholder="Ex: Mai Anh Kha"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="Ex: maianhkha.dev@gmail.com"/>
                      <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input type="text" className="form-control" placeholder="Ex: 01218455821"/>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div className="col-xl-6">
                <form className="form">
                  <fieldset>
                    <legend>Personalia:</legend>
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" placeholder="Ex: Mai Anh Kha"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="Ex: maianhkha.dev@gmail.com"/>
                      <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input type="text" className="form-control" placeholder="Ex: 01218455821"/>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({ user: state.UserReducer })

const mapDispatchToProps = dispatch => bindActionCreators({ requestUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Page)
