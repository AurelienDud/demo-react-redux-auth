import React, { FunctionComponent } from 'react'
import { Link } from "react-router-dom"

/**
 * TYPES
 */
 interface ICustomNavLink {
  to?: string
}

/**
 * HEADER NAV LINK
 * To use ReactRouterDom Link instead of Bootstrap native html tag 
 */
const CustomNavLink:FunctionComponent<ICustomNavLink> = ({ to = '/', children }) => (
  <div className="nav-item">
    <Link className="nav-link" to={to}>
      {children}
    </Link>
  </div>
)

export default CustomNavLink