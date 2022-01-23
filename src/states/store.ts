import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userSlice from '@src/states/userSlice'

/**
 * Store
 */
const store = createStore(
  userSlice.reducer,
  undefined,
  applyMiddleware( thunk )
)


/**
 * Exports
 */
export const actions = {
  user: userSlice.actions
}

export default store