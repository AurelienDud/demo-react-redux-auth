import * as React from "react"
import { useLocation, Navigate } from "react-router-dom"
import { useSelector } from 'react-redux'

/**
 * TYPES
 */
interface IWithAuthProps<P> {
  view: React.ComponentType, 
  delegatedProps?: P,
  redirectTo?: string,
  reverse?: boolean
}
interface IWithAuth<P = Record<string, never>> {
  (props:IWithAuthProps<P>): React.ReactElement
}

/**
 * AUTH HOC
 * Protect the view by Auth and so redirect to login if unlogged
 */
export const withAuth:IWithAuth = ({ view:View, delegatedProps, redirectTo = '/log', reverse = false }) => {
  const ViewWithAuth:React.FunctionComponent<typeof delegatedProps> = props => {
    const isLogged = useSelector<IAuthState>(state => state.isLogged)
    const location = useLocation()
    const toggle = reverse ? !isLogged : isLogged

    return toggle ? (
      <View  {...props}/>
    ) : (
      <Navigate to={redirectTo} state={{ from: location }} replace />
    )
  } 
  
  return <ViewWithAuth {...delegatedProps} />
}


//  export function withAuth<P = undefined> (View:React.ComponentType, delegatedProps?:P) {
//   const ViewWithAuth:React.FunctionComponent<P|{}> = props => {
//     const isLogged = useSelector<IAuthState>(state => state.isLogged)
//     const location = useLocation()

//     return isLogged ? (
//       <View  {...props}/>
//     ) : (
//       <Navigate to="/log" state={{ from: location }} replace />
//     )
//   } 
  
//   return <ViewWithAuth {...delegatedProps} />
// }
