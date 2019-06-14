/** class 组件 */
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }
    add() {
        this.setState({
            number: this.state.number + 1
        })
    }
    minus() {
        this.state((state) => {
            return {
                number: state.number - 1
            }
        })
    }
    render() {
        return (
            <div class="parent">
                {this.props.name}
                <br />
                {this.state.number}
                <!-- 或者使用箭头函数 ()=> this.add -->
        <button onClick={this.add.bind(this)}>+</button>
            </div>
        )
    }
}

render();

function render() {
    ReactDOM.render(<App name="brad"></App>, document.querySelector("#root"));
}

/** 函数组件 */

const h = React.createElement;
let number = 0;

let add = () => {
    number += 1;
    render();
}

let minus = () => {
    number -= 1;
    render();
}

render();

function App() {
    return (
        <div class="parent">
            <Box1 name="brad" />
            <Box2 />
        </div>
    );
}

function Box1(obj) {
    return (
        <div class="parent">
            {obj.name}
            <br />
            <span>{number}</span>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
}


function Box2() {
    return (
        <div class="parent">
            <span>{number}</span>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
}

function render() {
    ReactDOM.render(<App></App>, document.querySelector("#root"));
}