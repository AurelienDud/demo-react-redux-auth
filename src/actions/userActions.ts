import { Dispatch } from 'redux'
import * as API from '@src/services/api'
import { actions } from '@src/states/store'

/**
 * LOGIN
 */
export const userLogin = (credentials:IUserCredentials) => async (dispatch:Dispatch) => {
  try {
    let user = await API.requestAuthentification(credentials)
    // persist locally
    localStorage.setItem("user", JSON.stringify(user))
    // dispatch in the state
    dispatch(actions.user.login_success({ user }))
  } catch (error) {
    dispatch(actions.user.login_failure())
  }
}

/**
 * LOGOUT
 */
export const userLogout = () => (dispatch:Dispatch) => {
  // unpersist locally
  localStorage.removeItem("user")
  // dispatch in the state
  dispatch(actions.user.logout_success())
}