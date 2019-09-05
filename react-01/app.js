'use strict'

/**
 * 使用 React
 */
// const e = React.createElement

// class LikeButton extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       liked: false
//     }
//   }
//   render () {
//     if (this.state.liked) {
//       return 'You liked this.'
//     }
//     return e(
//       'button',
//       { onClick: () => this.setState({liked: true}) },
//       'like'
//     )
//   }
// }

// ReactDOM.render(e(LikeButton), document.getElementById('root'))

/**
 * 使用 React + JSX
 */
class LikeButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      liked: false
    }
  }
  render () {
    if (this.state.liked) {
      return 'You liked this.'
    }
    return (
      <button onClick={ () => this.setState({ liked: true }) }>like</button>
    )
  }
}

ReactDOM.render(<LikeButton/>, document.getElementById('root'))