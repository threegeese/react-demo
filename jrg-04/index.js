const money = {
    amount: 100000
};

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Father />
                <Mother />
            </div>
        );
    }
}

class Father extends React.Component {
    constructor() {
        super();
        this.state = {
            money: money
        };
    }
    render() {
        return (
            <div className="parent">
                父亲 {this.state.money.amount}
                <Boy_1 />
                <Boy_2 />
            </div>
        );
    }
}

class Mother extends React.Component {
    constructor() {
        super();
        this.state = {
            money: money
        };
    }
    render() {
        return (
            <div className="parent">
                母亲 {this.state.money.amount}
                <Girl_1 />
                <Girl_2 />
            </div>
        );
    }
}

class Boy_1 extends React.Component {
    constructor() {
        super();
        this.state = {
            money: money
        };
    }
    spendMoney() {
        money.amount -= 1000;
        this.setState({
            money: money
        });
    }
    render() {
        return (
            <div className="children">
                大儿子 {this.state.money.amount}
                <button onClick={this.spendMoney.bind(this)}>消费</button>
            </div>
        );
    }
}

class Boy_2 extends React.Component {
    constructor() {
        super();
        this.state = {
            money: money
        };
    }
    render() {
        return <div className="children">二儿子 {this.state.money.amount}</div>;
    }
}

class Girl_1 extends React.Component {
    constructor() {
        super();
        this.state = {
            money: money
        };
    }
    render() {
        return <div className="children">大女儿 {this.state.money.amount}</div>;
    }
}

class Girl_2 extends React.Component {
    constructor() {
        super();
        this.state = {
            money: money
        };
    }
    render() {
        return <div className="children">二女儿 {this.state.money.amount}</div>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
