// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const container = document.getElementById('container')
if (container) {
  ReactDOM.render(<App />, container)
}
