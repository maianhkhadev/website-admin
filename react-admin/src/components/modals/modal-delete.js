import React from 'react'

function ModalDelete(props) {

  return (
    <div className="modal modal-delete fade">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 mx-auto">
            <div className="modal-header">
              <div className="modal-title">Delete { props.name }</div>
            </div>
            <div className="modal-content">
              { props.children }
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={ props.hideModalDelete }>Close</button>
              <button className="btn btn-red" onClick={ props.confirmDelete }>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete
