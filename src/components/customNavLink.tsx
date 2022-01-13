import { FunctionComponent } from 'react'
import { Link } from "react-router-dom"

/**
 * TYPES
 */
 interface ICustomNavLink {
  to?: string
}

/**
 * HEADER NAV LINK
 */
const CustomNavLink:FunctionComponent<ICustomNavLink> = ({ to = '/', children }) => (
  <div className="nav-item">
    <Link className="nav-link" to={to}>
      {children}
    </Link>
  </div>
)

export default CustomNavLink