import React from 'react'
import './../static/sass/spinner.css'

// Adapted from /* http://tobiasahlin.com/spinkit/ */
const Spinner = ({ message }) =>
  <div className="flex-container">
    <div className="spinner flex-container">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
    <div className="spinner__message">{message}</div>
  </div>

export default Spinner;
