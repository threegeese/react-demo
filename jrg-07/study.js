import React from "react"
import ReactDOM from "react-dom"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const add = ()=> {
    setCount(count + 1)
  }
  const minus = ()=> {
    setCount(count - 1)
  }
  return (
    <div>
      {count}
      <div>
        <button onClick={add}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root') )