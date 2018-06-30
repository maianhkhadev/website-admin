import React, { Component } from 'react'
// STORE
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestTasks } from '@/store/actions'
// LAYOUT
import Layout from '@/layouts/default/index'

class Page extends Component {

  constructor(props) {
    super(props)

    this.state = {
      page: {
        current: 1,
        last: 5
      }
    }
  }

  componentDidMount() {
    let self = this

    let url = new URL(window.location.href)
    let page = url.searchParams.get('page')

    if (page !== null) {
      self.state.page.current = parseInt(page)
    }

    this.props.requestTasks(self.state.page.current)
  }

  createPageLink() {
    let self = this

    let links = []
    for (var i = 0; i < self.state.page.last; i++) {
      let className = 'page-item'
      if (self.state.page.current === i + 1) {
        className += ' active'
      }

      let href = `?page=${i + 1}`

      links.push(
        <li className={className} key={ i + 1 }>
          <a className="page-link" href={href}>{ i + 1 }</a>
        </li>
      )
    }
    return links
  }


  render() {
    let self = this

    return (
      <Layout>
        <div className="page page-tasks">
          <div className="container">
            <div className="page-header">
              <div className="row">
                <div className="col-xl-5 col-9">
                  <div className="block-search">
                    <img className="icon" src={ require('assets/images/icon-search.png') } alt="" />
                    <input type="text" className="form-control" placeholder="Type to search..." />
                  </div>
                </div>
                <div className="col-xl-7 col-3 text-right">
                  <button className="btn btn-blue">
                    Add Client
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="block-table block-tasks">
                  <div className="block-header">
                    <a>User</a>
                    <a>Title</a>
                    <a>Completed</a>
                  </div>
                  <div className="block-content">
                  {
                    self.props.tasks.map((task) => {
                      return (
                        <div className="block-table-row block-task" key={ task.id }>
                          <span>Mai Anh Kha</span>
                          <span>{ task.title }</span>
                          <span>
                          {
                            task.completed ? (
                              <figure>
                                <img className="" src={ require('assets/images/icon-true.png') } alt=""/>
                                True
                              </figure>
                            ) : (
                              <figure>
                                <img className="" src={ require('assets/images/icon-false.png') } alt=""/>
                                False
                              </figure>
                            )
                          }
                          </span>
                        </div>
                      )
                    })
                  }
                  </div>
                  <div className="block-footer">
                    <nav>
                      <ul className="pagination justify-content-center">
                      {
                        self.createPageLink()
                      }
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({ tasks: state.TasksReducer })

const mapDispatchToProps = dispatch => bindActionCreators({ requestTasks }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Page)
