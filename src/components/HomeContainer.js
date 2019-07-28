import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import { loadCards } from '../actions/loadCards'
import {setDifficulty} from '../actions/setDifficulty'
import { Redirect } from 'react-router-dom'

class GameContainer extends React.Component {
  onClick = (numberOfCards, dificultyLevel) => {
    this.props.loadCards(numberOfCards)
    this.props.setDifficulty(dificultyLevel)
  }

  render() {
    const shouldRedirect = this.props.cards
    if (shouldRedirect) {
      return <Redirect to="/game" />
    } else {
      return <Home onClick={this.onClick} />
    }
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  difficulty: state.difficulty
})

export default connect(
  mapStateToProps,
  { loadCards, setDifficulty }
)(GameContainer)
