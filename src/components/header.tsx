import React, { FunctionComponent } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { logoutAction } from '@src/actions/authActions'
import CustomNavLink from '@src/components/customNavLink'
import image from '@src/assets/images/favicon.svg'

/**
 * LOGOUT BUTTON
 */
const LogoutButton:FunctionComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logoutAction())
    navigate("/")
  } 

  return (
    <div className="nav-item">
      <Button variant="link" className="nav-link" onClick={handleClick}>
        Deconnexion
      </Button>
    </div>
  )
}

/**
 * HEADER COMPONENT
 */
const Header:FunctionComponent = () => {
  const isLogged = useSelector<IAuthState>(state => state.isLogged)

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* Logo and home link */}
        <Navbar.Brand as="div">
          <Link to='/'>
            <img
              src={image}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Link>
        </Navbar.Brand>

        {/* Menu button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu items */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {isLogged ? (
              <LogoutButton />
            ) : (
              <CustomNavLink to="/log">
                Connexion
              </CustomNavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header