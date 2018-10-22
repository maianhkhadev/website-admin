const functions = function(context) {
  let self = this
  self.context = context
}

functions.prototype.bind = function() {
  let self = this

  self.context.onSearchText = self.onSearchText.bind(this)
  self.context.onClickPageLink = self.onClickPageLink.bind(this)
  self.context.onSelectLimit = self.onSelectLimit.bind(this)
  self.context.onCheckItems = self.onCheckItems.bind(this)
  self.context.showModalDelete = self.showModalDelete.bind(this)
  self.context.hideModalDelete = self.hideModalDelete.bind(this)
  self.context.confirmDelete = self.confirmDelete.bind(this)
  self.context.beforeFetchData = self.beforeFetchData.bind(this)
  self.context.fetchData = self.fetchData.bind(this)
}

functions.prototype.onSearchText = function(value) {
  let self = this

  self.context.props.requestItems({ name: value })
}

functions.prototype.onClickPageLink = function(page) {
  let self = this

  self.context.props.requestItems({ page: page })
}

functions.prototype.onSelectLimit = function() {
  console.log(2)
}

functions.prototype.onCheckItems = function(e) {

  let checkboxes = document.querySelectorAll('.block-table-row input[type=checkbox]')
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = e.target.checked
  })
}

functions.prototype.showModalDelete = function(itemId) {
  let self = this

  self.context.props.pagination.data.forEach(function(item) {
    if(item.id === itemId) {
      self.context.setState({ deleteItem: { ...item } })
    }
  })

  document.querySelector('body').classList.add('no-scroll')

  let modal = document.querySelector('.page-users .modal-delete')
  modal.classList.add('show')
}

functions.prototype.hideModalDelete = function() {

  document.querySelector('body').classList.remove('no-scroll')

  let modal = document.querySelector('.modal-delete')
  modal.classList.remove('show')
}

functions.prototype.confirmDelete = function() {
  let self = this

  let id = self.context.state.deleteItem.id
  self.context.props.deleteItem(id, function() {
    self.context.hideModalDelete()
  })
}

functions.prototype.beforeFetchData = function() {
  console.log(3)
}

functions.prototype.fetchData = function() {
  let self = this

  let params = self.context.beforeFetchData()

  // self.context.props.requestItems({ page: page })
}

export default functions
