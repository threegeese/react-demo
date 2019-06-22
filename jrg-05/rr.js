/**
 * index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./app.js";

let store = createStore(reducer);
render();

store.subscribe(() => render());

function reducer(state, action) {
    if (state === undefined) {
        return 0;
    }
    switch (action.type) {
        case "add":
            return state + action.payload;
            break;
        case "minus":
            return state - action.payload;
            break;
        case "addIfOdd":
            return state + action.payload;
            break;
        case "addAsync":
            return state + action.payload;
            break;
        default:
            return state;
    }
}

function add() {
    store.dispatch({ type: "add", payload: 1 });
}

function minus() {
    store.dispatch({ type: "minus", payload: 1 });
}
function addIfOdd() {
    if (store.getState() % 2 === 1) {
        store.dispatch({ type: "addIfOdd", payload: 1 });
    }
}

function addAsync() {
    setTimeout(() => {
        store.dispatch({ type: "addAsync", payload: 1 });
    }, 2000);
}

function render() {
    ReactDOM.render(
        <App
            value={store.getState()}
            add={add}
            minus={minus}
            addIfOdd={addIfOdd}
            addAsync={addAsync}
        />,
        document.getElementById("root")
    );
}


/**
 * app.js
 */
import React from "react";

class App extends React.Component {
    add() {
        this.props.add();
    }

    minus() {
        this.props.minus();
    }

    addIfOdd() {
        this.props.addIfOdd();
    }

    addAsync() {
        this.props.addAsync();
    }

    render() {
        return (
            <div>
                你点击 <span>{this.props.value}</span> 次
                <div>
                    <button id="add" onClick={() => this.add()}> {" "} +1{" "} </button>
                    <button id="minus" onClick={() => this.minus()}> {" "} -1{" "} </button>
                    <button id="addIfOdd" onClick={() => this.addIfOdd()}> {" "} 单数就+1{" "} </button>
                    <button id="addAsync" onClick={() => this.addAsync()}> {" "} 两秒后+1{" "} </button>
                </div>
            </div>
        );
    }
}

export default App