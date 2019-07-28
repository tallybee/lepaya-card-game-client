import {SET_DIFFICULTY} from '../actions/setDifficulty'

export default function reducer (state = null, action) {
  switch(action.type) {
    case SET_DIFFICULTY: {
      return action.payload;
    }
    default: return state
  }
}
