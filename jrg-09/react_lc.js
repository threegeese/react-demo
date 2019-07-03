import React from "react"
import ReactDOM from "react-dom"

import "./index.css"

class App extends React.Component {

  clicked() {
    console.log("点击了");
    this.setState({
      n: this.state.n + 1
    })
  }

  constructor() {
    super()
    this.state = {
      n: 0
    }
    console.log("创建 App")
  }

  componentWillMount() {
    console.log("将要 mount")
  }

  render() {
    console.log("渲染内容 update")
    return (
      <div>
        {this.state.n}&nbsp;
        <button onClick={()=> this.clicked()}>+1</button>
      </div>
    )
  }

  componentDidMount() {
    console.log("mount 完毕")
  }

  componentWillUpdate() {
    console.log("将要 update")
  }

  componentDidUpdate() {
    console.log("update 之后")
  }

  // ......
}

ReactDOM.render(<App />, document.getElementById("root"))