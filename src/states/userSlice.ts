import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/**
 * TYPES 
 */
export interface ILoginPayload {
  user:IUser
}

/**
 * GET LOCAL USER
 */
 const localUser = localStorage.getItem("user")
 const user:IUser|undefined = !!localUser && JSON.parse(localUser)
 
 /**
  * INITIAL STATE
  */
const initialState:IAuthState = {
  isLogged: !!user,
  user: user
}

/**
 * AUTH REDUCER
 */
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login_success: (state, actions:PayloadAction<ILoginPayload>) => {
      state.isLogged = true
      state.user = actions.payload.user
    },
    login_failure: (state) => {
      state.isLogged = false
      state.user = undefined
    },
    logout_success: (state) => {
      state.isLogged = false
      state.user = undefined
    }
  },
})

/**
 * Export actions and the reducer
 */
export default userSlice