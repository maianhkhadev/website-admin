import React from 'react'
// MODAL PARENT
import ModalDelete from './modal-delete'

function ModalDeleteUser(props) {

  return (
    <ModalDelete hideModalDelete={ props.hideModalDelete } confirmDelete={ props.confirmDelete }>
      <form className="form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control-plaintext" value={ props.deleteItem.name } />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control-plaintext" value={ props.deleteItem.email } />
        </div>
      </form>
    </ModalDelete>
  )
}

export default ModalDeleteUser
