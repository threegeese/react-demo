import React, { Component } from "react"

class TemperatureCalculator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature})
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature})
  }

  render () {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={ celsius }
          onTemperatureChange={ this.handleCelsiusChange } />

        <TemperatureInput
          scale="f"
          temperature={ fahrenheit }
          onTemperatureChange={ this.handleFahrenheitChange } />

        <BoilingVerdict celsius={ parseFloat(celsius) } />
      </div>
    )
  }
}

class TemperatureInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      temperature: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit'
    }
  }

  handleChange (e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render () {
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in { this.scaleNames[scale] }:</legend>
        <input value={ this.props.temperature } onChange={ this.handleChange } />
        <BoilingVerdict celsius={ parseFloat(this.props.temperature) } />
      </fieldset>
    )
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

/**
 * 工具函数: 摄氏度与华氏度之间相互转换
 */
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

export default TemperatureCalculator