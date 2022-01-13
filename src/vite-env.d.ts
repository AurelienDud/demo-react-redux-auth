/// <reference types="vite/client" />

declare interface ILocationState {
  from?: { 
    pathname: string 
  }
}

/**
 * Generic redux action interface 
 */
 declare interface IAction<P = any> { 
  type: string, 
  payload: Record<string, P>
}

/**
 * Redux authentification state interface
 */
 declare interface IAuthState {
  isLogged: boolean,
  user: IUser|undefined
}

/**
 * User credentials interface
 */
declare interface IUserCredentials {
  username: string,
  password: string
}

/**
 * User interface
 */
declare interface IUser {
  id: string,
  name: string,
  username: string,
  email: string,
  avatar: string
}

