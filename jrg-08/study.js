import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import "./index.css"

function HomePage() {
  return <div className="showPage">首页</div>
}

function Login() {
  return <div className="showPage">登录</div>
}

function SignUp() {
  return <div className="showPage">注册</div>
}


function App() {
  return (
    <Router>
      <div className="btns">
        <Link to="/welcome"><button>首页</button></Link>
        <Link to="/login"><button>登录</button></Link>
        <Link to="/signup"><button>注册</button></Link>
      </div>
      <Route path="/welcome" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))