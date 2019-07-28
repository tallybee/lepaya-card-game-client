export const SET_DIFFICULTY = 'SET_DIFFICULTY'

export function setDifficulty(difficulty) {
  return { type: SET_DIFFICULTY, payload: difficulty }
}