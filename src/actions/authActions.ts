import { Dispatch } from 'redux'
import * as API from '@src/services/api'
import { login_success, login_failure, logout_success } from '@src/states/authSlice'

/**
 * LOGIN
 */
export const loginAction = (credentials:IUserCredentials) => (dispatch:Dispatch) => {
  return API.requestAuthentification(credentials)
    .then(user => {
      localStorage.setItem("user", JSON.stringify(user))
      dispatch(login_success({ user }))
    })
    .catch(() => {
      dispatch(login_failure())
    })
}

/**
 * LOGOUT
 */
export const logoutAction = () => (dispatch:Dispatch) => {
  localStorage.removeItem("user")
  dispatch(logout_success())
}