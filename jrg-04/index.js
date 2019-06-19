const money = {
    amount: 1000000
};

//
const fnLists = {};
const eventHub = {
    triggle(eventName, data) {
        let fnList = fnLists[eventName];
        if (!fnList) {
            return;
        }
        for (let i = 0; i < fnList.length; i++) {
            fnList[i](data);
        }
    },

    on(eventName, fn) {
        if (!fnLists[eventName]) {
            fnLists[eventName] = [];
        }
        fnLists[eventName].push(fn);
    }
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
        eventHub.on("spendMoney", data => {
            this.setState({
                money: money
            });
        });
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
        let amount = Math.round(Math.random() * 100000);
        money.amount -= amount;
        this.setState({
            money: money
        });
        eventHub.triggle("spendMoney", amount);
    }
    render() {
        return (
            <div className="children">
                败家子 {this.state.money.amount}
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
        eventHub.on("spendMoney", data => {
            this.setState({
                money: money
            });
        });
    }
    render() {
        return <div className="children">二女儿 {this.state.money.amount}</div>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
