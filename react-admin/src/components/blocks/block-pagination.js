import React from 'react';

class Block extends React.Component {

  constructor(props) {
    super(props)

    this.createPageLink = this.createPageLink.bind(this)
    this.onClickPageLink = this.onClickPageLink.bind(this)
    //State
    this.state = {

    }
  }

  componentDidMount() {
    let self = this

    setTimeout(function() {
      console.log(self.props.pagination)
    }, 2000)
  }

  createPageLink() {
    let self = this
    let pagination = self.props.pagination

    let links = []
    for (var i = 0; i < pagination.last_page; i++) {
      let className = 'page-item'
      if (pagination.current_page === i + 1) {
        className += ' active'
      }

      let page = i + 1

      links.push(
        <li className={className} key={page}>
          <a className="page-link" href="#" onClick={(e) => this.onClickPageLink(e, page)}>{ page }</a>
        </li>
      )
    }
    return links
  }

  onClickPageLink(e, page) {
    e.preventDefault()

    let self = this

    self.props.onClick && self.props.onClick(page)
  }

  render() {
    let self = this
    let pagination = self.props.pagination

    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${pagination.current_page === 1 ? 'disabled' : ''}`}>
            <a className="page-link" href="#" onClick={(e) => this.onClickPageLink(e, 1)}>&laquo;</a>
          </li>
          {
            self.createPageLink()
          }
          <li className={`page-item ${pagination.current_page === pagination.last_page ? 'disabled' : ''}`}>
            <a className="page-link" href="#" onClick={(e) => this.onClickPageLink(e, pagination.last_page)}>&raquo;</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Block
