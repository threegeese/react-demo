const h = React.createElement;
let number = 0;

let onClickButton = ()=> {
    number += 1;
    render();
}

let onClickButton2 = ()=> {
    number -= 1;
    render();
}

render();

function render() {
    let div = h("div",{ className: "parent" },
        h("span", { className: "red" }, number),
        h("button", { onClick: onClickButton }, "+"),
        h("button", { onClick: onClickButton2 }, "-")
    );
    ReactDOM.render(div, document.querySelector("#root"));
}