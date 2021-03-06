import React, { FunctionComponent } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

/**
 * TYPES
 */
interface IForgottenPasswordModal {
  isOpen?: boolean,
  handleClose?: () => void
}

/**
 * FORGOTTEN PASSWORD MODAL
 */
const ForgottenPasswordModal:FunctionComponent<IForgottenPasswordModal> = ({ isOpen = false, handleClose }) => (
  <Modal show={isOpen} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>
        Mot de passe oublié
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Veuillez remplir votre adresse email ci-dessous. 
      Nous vous enverrons un email contenant un lien de réinitialisation de votre mot de passe.
      <Form className="mt-3">
        <Form.Control 
          type="email" 
          placeholder="user@email.com" 
        />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Annuler
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Réinitialiser le mot de passe
      </Button>
    </Modal.Footer>
  </Modal>
)

export default ForgottenPasswordModal