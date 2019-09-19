import React from "react"

import  cat from '../assets/cat.png'

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = { x: 100, y: 32 }
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class Cat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imgStyle: { 
        position: 'absolute',
        left: 0,
        top: 0,
        cursor: 'pointer'
      }
    }
  }

  render() {
    const mouse = this.props.mouse
    const imgStyle = { 
      ...this.state.imgStyle,
      left: mouse.x - 32,
      top: mouse.y - 32
    }
    return (
      <img src={ cat } style={ imgStyle } alt="a cat" />
    )
  }
}

class RenderProps extends React.Component {
  render () {
    return (
      <div>
        <p>移动鼠标!</p>
        <Mouse render={mouse => (
          <Cat mouse={ mouse } />
        )}/>
      </div>
    )
  }
}

export default RenderProps