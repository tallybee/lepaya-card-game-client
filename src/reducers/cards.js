import {CARDS_LOADED} from '../actions/loadCards'

export default function reducer (state = null, action) {
  switch(action.type) {
    case CARDS_LOADED:
      return action.payload    
    default:
      return state
  }
}