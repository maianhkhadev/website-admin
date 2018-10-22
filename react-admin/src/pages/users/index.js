import React, { Component } from 'react'
// ROUTE
import { Link } from 'react-router-dom'
// STORE
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestUsers, deleteUser } from '@/store/actions'
// LAYOUT
import Layout from '@/layouts/table/index'
import Functions from '@/layouts/table/functions'
// BLOCKS
import BlockTableUser from '@/components/blocks/block-table-user'
import BlockSearch from '@/components/blocks/block-search'
// MODALS
import ModalDeleteUser from '@/components/modals/modal-delete-user'

class Page extends Component {

  constructor(props) {
    super(props)

    // LAYOUT FUNCTIONS
    let functions = new Functions(this)
    functions.bind()

    this.state = {
      deleteItem: {
        id: null, name: '', email: ''
      }
    }
  }

  componentDidMount() {
    let self = this

    self.props.requestItems({ page: 1 })
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
                  <BlockSearch onEnter={ self.onSearchText }/>
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
                <BlockTableUser
                  pagination={ self.props.pagination }
                  onCheckItems={ self.onCheckItems }
                  showModalDelete={ self.showModalDelete }
                  onClickPageLink={ self.onClickPageLink }
                />
              </div>
            </div>
          </div>

          <ModalDeleteUser
            deleteItem={ self.state.deleteItem }
            hideModalDelete={ self.hideModalDelete }
            confirmDelete={ self.confirmDelete }
          />
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({ pagination: state.UsersReducer })

const mapDispatchToProps = dispatch => bindActionCreators({ requestItems: requestUsers, deleteItem: deleteUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Page)
