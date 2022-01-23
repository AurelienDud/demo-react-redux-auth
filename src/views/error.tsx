import React, { FunctionComponent } from 'react'
import { Container, Alert } from 'react-bootstrap'

interface IErrorView {
  code?: number
}

/**
 * ERROR VIEW
 */
const ErrorView:FunctionComponent<IErrorView> = ({ code = '404' }) => (
  <Container className="my-4">
    <Alert variant='warning'>
      {code === 404 ? 'Nothing by there...' : 'Something happened!'}
    </Alert>
  </Container>
)

export default ErrorView
