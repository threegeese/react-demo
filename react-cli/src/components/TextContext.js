import React, { Component } from "react"

const nContext = React.createContext()

function F1() {
  return <div>1111 <F2 /></div>
}

function F2() {
  return <div>2222 <F3 /></div>
}

function F3() {
  return <div>3333 <F4 /></div>
}

function F4() {
  return (
    <div>
      4444,&nbsp;
      <nContext.Consumer>
        {(n) => n}
      </nContext.Consumer>
    </div>)
}

class TestContext extends React.Component {
  render() {
    return (
      <div>
        <nContext.Provider value="99">
          <F1></F1>
        </nContext.Provider>
      </div>
    )
  }
}

export default TestContext
