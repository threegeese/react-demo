/**
 * 错误边界（Error Boundaries）
 * 捕获并打印发生在子组件树任何位置的 JavaScript 错误，并且渲染出备用 UI
 */
import React, { Component } from 'react'

class ErrorWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render () {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    return this.props.children
  }
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }
  
  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!')
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
  }
}

function ErrorBoundary() {
  return (
    <div>
      <p>
        <b>
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorWrapper>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorWrapper>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorWrapper><BuggyCounter /></ErrorWrapper>
      <ErrorWrapper><BuggyCounter /></ErrorWrapper>
    </div>
  )
}

export default ErrorBoundary