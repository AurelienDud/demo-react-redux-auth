import React, { FunctionComponent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Button, Card, Form, Spinner } from 'react-bootstrap'
import { userLogin } from '@src/actions/userActions'
import ForgottenPasswordModal from '@src/components/forgottenPasswordModal'

/**
 * LOGIN PAGE
 */
const LoginView:FunctionComponent = () => {
  const dispatch = useDispatch()
  const isLogged = useSelector<IAuthState>(state => state.isLogged)
  const [ isOpenForgottenPasswordModal, setIsOpenForgottenPasswordModal ] = useState<boolean>(false)
  const [ onLoad, setOnLoad] = useState<boolean>(false)

  /**
   * handle login form submit
   */ 
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // enable loading
    setOnLoad(true)

    // get form data
    const formData = new FormData(event.currentTarget)
    const username = formData.get("username") as string
    const password = formData.get("password") as string

    // dispatch login request
    dispatch(userLogin({ username, password }))
  }

  /**
   * Login side effect
   * Triggered when the auth state is returned by Redux
   */
  useEffect(() => {
    isLogged && setOnLoad(false)
  }, [isLogged])

  /**
   * Render on loading
   */
  if (onLoad) return (
    <div className="py-5 text-center">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )

  /**
   * Render login form 
   */
  return (
    <Container className="my-4">
      <Card className="mx-auto shadow-sm" style={{ maxWidth: '30rem'}}>
        {/* HEADER */}
        <Card.Header className="h5 text-center">
          Connexion
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* USERNAME INPUT */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                {`Nom d'utilisateur`} 
              </Form.Label>
              <Form.Control 
                type="text" 
                placeholder="User" 
              />
            </Form.Group>

            {/* PASSWORD INPUT */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Mot de passe
              </Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Admin" 
              />
            </Form.Group>
            
            <div>
              {/* SUBMIT */}
              <Button variant="primary" type="submit">
                Connexion
              </Button>

              {/* FORGOTTEN PASSWORD */}
              <Button 
                variant="link"
                size="sm" 
                onClick={() => setIsOpenForgottenPasswordModal(s => !s)}
              >
                Mot de passe oublié
              </Button>
            </div>
          </Form>
        </Card.Body>

        {/* FORGOTTEN PASSWORD MODAL */}
        <ForgottenPasswordModal 
          isOpen={isOpenForgottenPasswordModal} 
          handleClose={() => setIsOpenForgottenPasswordModal(false)}
        />
      </Card>
    </Container>
  )
}

export default LoginView