import React from 'react';

class Block extends React.Component {

  constructor(props) {
    super(props)
    //Methods
    this.getValue = this.getValue.bind(this)
    //State
    this.state = {
      value: ''
    }
  }

  getValue() {
    let self = this
    return self.refs['search-box'].value
  }

  componentDidMount() {
    let self = this

    self.refs['search-box'].addEventListener('change', function() {
      let value = self.refs['search-box'].value

      self.setState({ value })
      self.props.onEnter && self.props.onEnter(value)
    })
  }

  render() {
    let self = this

    return (
      <div className="block-search">
        <img className="icon" src={require('assets/images/icon-search.png')} alt="" />
        <input ref="search-box" type="text" className="form-control" placeholder="Type to search..."/>
      </div>
    )
  }
}

export default Block
