/**
 * index.js
 */
import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import App from "./app.js"

function reducer(state, action) {
  if(state === undefined) { return {n: 0} }
  switch (action.type) {
    case 'add':
      return { n: state.n + action.payload }
      break
    case 'minus':
      return { n: state.n - action.payload }
      break
    case 'addIfOdd':
      if (state.n % 2 === 1) 
        return { n: state.n + action.payload }
      else
        return state
      break
    case 'addAsync':
      return { n: state.n + action.payload  }
      break
    default:
      break
  }
}

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


/**
 * app.js
 */
import React from "react"
import { connect } from "react-redux";

class App extends React.Component {
	render() {
    return (
      <div>
        你点击 <span>{this.props.n}</span> 次
        <div>
          <button id="add" onClick={() => this.props.add()}> +1 </button>
          <button id="minus" onClick={() => this.props.minus()}> -1 </button>
          <button id="addIfOdd" onClick={() => this.props.addIfOdd()}> 单数就+1 </button>
          <button id="addAsync" onClick={() => this.props.addAsync()}> 两秒后+1 </button>
        </div>
      </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		n: state.n
	}
}

const mapDispatchToProps = dispatch => {
	return {
		add: () => dispatch({ type: 'add', payload: 1 }),
		minus: () => dispatch({ type: 'minus', payload: 1 }),
		addIfOdd: () => dispatch({ type: 'addIfOdd', payload: 1 }),
		addAsync: () => {
			setTimeout(() => {
				dispatch({ type: 'addAsync', payload: 1 })
			}, 2000);
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)