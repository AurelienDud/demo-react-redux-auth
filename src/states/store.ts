import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import authReducer from '@src/states/authSlice'

const store = createStore(
  authReducer,
  applyMiddleware( thunk )
)

export default store