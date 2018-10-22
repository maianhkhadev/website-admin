import React from 'react'
// ROUTE
import { Link } from 'react-router-dom'
// PLUGINS
import { timeFromNow } from '@/plugins/moment'
// BLOCKS
import BlockPagination from './block-pagination'

function BlockTableUser(props) {

  return (
    <div className="block-table block-table-users">
      <div className="block-header">
        <a className="block-table-title">
          <input type="checkbox" className="" onChange={(e) => { props.onCheckItems(e) } } />
        </a>
        <a className="block-table-title">Name</a>
        <a className="block-table-title">Email</a>
        <a className="block-table-title">Phone</a>
        <a className="block-table-title">Last update</a>
        <a className="block-table-title"></a>
        <div className="actions-for-all">
          <a className="icon" onClick={(e) => props.showModalDelete()}>
            <img className="" src={ require('assets/images/block-table/icon-delete.png') } alt=""/>
          </a>
        </div>
      </div>
      <div className="block-content">
      {
        props.pagination.data.map((user) => {
          return (
            <div className="block-table-row block-table-row-user" key={ user.id }>
              <span>
                <input type="checkbox" className="" value={ user.id } />
              </span>
              <span>{ user.name }</span>
              <span>{ user.email }</span>
              <span>{ user.phone }</span>
              <span>{ timeFromNow(user.updated_at) }</span>
              <span>
                <Link className="icon" to={`/user/${user.id}/view`}>
                  <img className="" src={ require('assets/images/block-table/icon-view.png') } alt=""/>
                </Link>
                <Link className="icon" to={`/user/${user.id}/edit`}>
                  <img className="" src={ require('assets/images/block-table/icon-edit.png') } alt=""/>
                </Link>
                <a className="icon" onClick={(e) => props.showModalDelete(user.id)}>
                  <img className="" src={ require('assets/images/block-table/icon-delete.png') } alt=""/>
                </a>
              </span>
            </div>
          )
        })
      }
      </div>
      <div className="block-footer">
        <BlockPagination pagination={ props.pagination } onClick={ props.onClickPageLink }/>
      </div>
    </div>
  )
}

export default BlockTableUser
