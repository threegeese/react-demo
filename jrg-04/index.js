const money = {
    amount: 1000000
};

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

const bank = {
    init() {
        eventHub.on("spendMoney", data => {
            money.amount -= data;
            renderApp();
        });
    }
};

bank.init();

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            money: money
        };
    }
    render() {
        return (
            <div className="app">
                <Father money={this.state.money} />
                <Mother money={this.state.money} />
            </div>
        );
    }
}

class Father extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="parent">
                父亲 {this.props.money.amount}
                <Boy_1 money={this.props.money} />
                <Boy_2 money={this.props.money} />
            </div>
        );
    }
}

class Mother extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="parent">
                母亲 {this.props.money.amount}
                <Girl_1 money={this.props.money} />
                <Girl_2 money={this.props.money} />
            </div>
        );
    }
}

class Boy_1 extends React.Component {
    constructor() {
        super();
    }
    spendMoney() {
        let amount = Math.round(Math.random() * 100000);
        eventHub.triggle("spendMoney", amount);
    }
    render() {
        return (
            <div className="children">
                败家子 {this.props.money.amount}
                <button onClick={this.spendMoney.bind(this)}>消费</button>
            </div>
        );
    }
}

class Boy_2 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className="children">二儿子 {this.props.money.amount}</div>;
    }
}

class Girl_1 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className="children">大女儿 {this.props.money.amount}</div>;
    }
}

class Girl_2 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className="children">二女儿 {this.props.money.amount}</div>;
    }
}

renderApp();
function renderApp() {
    ReactDOM.render(<App />, document.getElementById("root"));
}
