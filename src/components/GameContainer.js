import React from 'react'
import {connect} from 'react-redux'
import Game from './Game'


class GameContainer extends React.Component {
  state = {
    cardsInOrder: [1,2,3,4]
  }
  handleClick = event => {

    if (this.state.cardsInOrder.length > 0) {
      const firstCard = this.state.cardsInOrder.shift();
      if (firstCard === event && this.state.cardsInOrder.length > 0) {
        console.log('doing well')
      } else if (firstCard === event && this.state.cardsInOrder.length === 0) {
        console.log('you won')
      } else {
        console.log('you lost')
      }
    } else {
      console.log('boo')
    }
  };
  
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