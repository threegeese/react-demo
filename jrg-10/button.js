import React, { Component } from "react"

import "./button.css"

export default class Button extends Component {

  constructor() {
    super()
    this.state = {
      active: false,
      deltaX: 0,
      deltaY: 0
    }
    this.myRef = React.createRef()
  }

  btnClicked(event) {
    let {x, y} = this.myRef.current.getBoundingClientRect()
    let {clientX, clientY} = event
    let [deltaX, deltaY] = [clientX-x-5, clientY-y-5]
    this.setState({
      active: true,
      deltaX: deltaX,
      deltaY: deltaY
    })
  }

  animationEnd() {
    this.setState({
      active: false
    })
  }

  render() {
    return (
      <button className="my-button" onClick={this.btnClicked.bind(this)} ref={this.myRef}>
        <span className="btn-value">{this.props.value}</span>
        {this.state.active ? 
          <span className="circle" 
            style={{left: this.state.deltaX, top: this.state.deltaY}}
            onAnimationEnd={this.animationEnd.bind(this)}
          /> 
          : ''}
      </button>
    )
  }

}