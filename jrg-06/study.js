/**
 * React Context
 */


//原理：principle
{
  let context = {};
  window.setContext = function(key, value) {
    context[key] = value;
  };
  window.F1 = function () {
    console.log(1);
    F2();
  }
  
  function F2() {
    console.log(2);
    F3();
  }
  
  function F3() {
    console.log(3);
    F4();
  }
  
  function F4() {
    console.log(4);
  }
}

{
  window.setContext("n", 100);
  setTimeout(() => {
    window.f1();
  }, 1000);
  console.log("done");
}


// React Context
import React from "react"
import ReactDOM from "react-dom"

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

class App extends React.Component {
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

ReactDOM.render(<App />, document.getElementById('root'))


// Consumer
import React from "react"
import ReactDOM from "react-dom"

function Consumer(props) {
  let result = props.children(99)
  return <div>{result}</div>
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Consumer>
          {n => n}
        </Consumer>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root') )