import React from 'react'
import ReactDOM from 'react-dom'

// import App from './app.js'
import Clock from './clock.js'
import TemperatureCalculator from './components/TemperatureCalculator.js'


import './index.css'

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Clock />, document.getElementById('root'))
ReactDOM.render(<TemperatureCalculator />, document.getElementById('root'))