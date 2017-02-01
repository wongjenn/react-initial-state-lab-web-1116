const React = require('react')

class Bomb extends React.Component{
  constructor(props){
    super(props)
    this.state = {secondsLeft: this.props.initialCount}
  }

  render(){
    return(
      <div >
        {this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!` }
      </div>
    )
  }
}

module.exports = Bomb
