import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root'
import './assets/scss/index.scss'

/**
* jQuery and Bootstrap includes
*/
window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')

// window.onload = function () {
//   window.$.getJSON('https://jsonip.com/?callback=?', function(data) {
//     console.log(data);
//   });
// };

ReactDOM.render((
  <BrowserRouter>
    <Root />
  </BrowserRouter>
), document.getElementById('root'))
