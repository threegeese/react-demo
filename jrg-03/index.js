import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            start: new Date()
        };
    }
    reach_1() {
        console.log(
            "兔子到达终点! 用时" + (new Date() - this.state.start) + "ms"
        );
    }
    reach_2() {
        console.log(
            "乌龟到达终点! 用时" + (new Date() - this.state.start) + "ms"
        );
    }
    render() {
        return (
            <div>
                <div className="race">
                    <Rabbit />
                    <Referee />
                    <Tortoise />
                </div>
                <Track1 reach={this.reach_1.bind(this)} />
                <Track2 reach={this.reach_2.bind(this)} />
            </div>
        );
    }
}

class Rabbit extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    <span role="img" aria-label="rabbit">
                        🐇
                    </span>
                </h2>
                <span>0</span>
            </div>
        );
    }
}

class Tortoise extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    <span role="img" aria-label="tortoise">
                        🐢
                    </span>
                </h2>
                <span>0</span>
            </div>
        );
    }
}

function Referee() {
    return <h2>裁判</h2>;
}

class Track1 extends React.Component {
    constructor() {
        super();
        this.state = {
            style: {
                transform: `translateX(100%)`
            }
        };
        let N = 100;
        let timer = setInterval(() => {
            N -= 20;
            this.setState({
                style: {
                    transform: `translateX(${N}%)`
                }
            });
            if (N <= 0) {
                clearInterval(timer);
                this.props.reach();
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                <div style={this.state.style}>
                    <span role="img" aria-label="rabbit">
                        🐇
                    </span>
                </div>
                <div className="track" />
            </div>
        );
    }
}

class Track2 extends React.Component {
    constructor() {
        super();
        this.state = {
            style: {
                transform: `translateX(100%)`
            }
        };
        let N = 100;
        let timer = setInterval(() => {
            N -= 2;
            this.setState({
                style: {
                    transform: `translateX(${N}%)`
                }
            });
            if (N <= 0) {
                clearInterval(timer);
                this.props.reach();
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                <div style={this.state.style}>
                    <span role="img" aria-label="tortoise">
                        🐢
                    </span>
                </div>
                <div className="track" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
