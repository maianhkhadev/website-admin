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

  }

  componentWillReceiveProps(nextProps) {
    let self = this
    console.log(nextProps.match.params.id)
    if (nextProps.match.params.id !== this.props.match.params.id) {
      self.props.requestUser(nextProps.match.params.id)
    }
  }

  render() {
    let self = this

    return (
      <Layout>
        <div className="page page-user-view">
          { self.props.user.name }
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({ user: state.UserReducer })

const mapDispatchToProps = dispatch => bindActionCreators({ requestUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Page)
