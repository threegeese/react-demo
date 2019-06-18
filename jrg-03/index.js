import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            start: new Date(),
            cast_time1: 0,
            case_time2: 0
        };
    }
    reach_1() {
        let end = new Date() - this.state.start;
        this.setState({
            cast_time1: end
        });
        console.log("兔子到达终点! 用时" + end + "ms");
    }
    reach_2() {
        let end = new Date() - this.state.start;
        this.setState({
            case_time2: end
        });
        console.log("乌龟到达终点! 用时" + end + "ms");
    }
    render() {
        return (
            <div>
                <div className="race">
                    <Rabbit castTime={this.state.cast_time1} />
                    <Tortoise castTime={this.state.case_time2} />
                </div>
                <Track
                    reach_1={this.reach_1.bind(this)}
                    reach_2={this.reach_2.bind(this)}
                />
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
                    用时
                </h2>
                <span>{this.props.castTime}</span>
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
                    用时
                </h2>
                <span>{this.props.castTime}</span>
            </div>
        );
    }
}

class Track extends React.Component {
    render() {
        return (
            <div className="track">
                <Track1 reach={this.props.reach_1} />
                <Track2 reach={this.props.reach_2} />
            </div>
        );
    }
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
            N -= 10;
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
                <div className="singletrack" />
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
                <div className="singletrack" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));