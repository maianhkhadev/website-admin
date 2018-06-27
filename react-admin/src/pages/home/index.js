import React, { Component } from 'react'
import Layout from '@/layouts/default/index'

class Page extends Component {
  render() {
    return (
      <Layout>
        <div className="page page-home">
          <div className="container">
            <div className="page-sidebar">
              <div className="row">
                <div className="col-xl-12">
                  <div className="block-data-main">
                    <div className="number">1000</div>
                    <div className="text">total clients</div>
                  </div>
                </div>
                <div className="col-xl-6 col-4">
                  <div className="block-data">
                    <div className="text">Retail</div>
                    <div className="number">12</div>
                  </div>
                </div>
                <div className="col-xl-6 col-4">
                  <div className="block-data">
                    <div className="text">Wholesale</div>
                    <div className="number">45</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">

                </div>
              </div>
            </div>
            <div className="page-container">

              <div className="row">
                <div className="col-xl-12">
                  <div className="block-table block-clients">
                    <div className="block-header">
                      <a>Name</a>
                      <a>Email</a>
                      <a>Type</a>
                      <a>Address</a>
                      <a></a>
                    </div>
                    <div className="block-content">

                    </div>
                    <div className="block-footer">
                    </div>
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

export default Page
