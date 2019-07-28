import React from 'react'
import {connect} from 'react-redux'
import Game from './Game'


class GameContainer extends React.Component {

  
  render() {
    return <Game cards={this.props.cards} handleClick={this.handleClick}/>
  }
}

const mapStateToProps = state => ({
  cards: state.cards
})

export default connect(mapStateToProps
  // ,   {loadCards}
  )(GameContainer)