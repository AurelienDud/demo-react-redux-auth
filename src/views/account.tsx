import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'

const AccountView:FunctionComponent = () => {
  const user = useSelector<IAuthState, IUser|undefined>(state => state.user)

  if (!user) return <></>

  return (
    <Container className="my-4">
      <h1 className='h3 text-sedondary mb-4'>
        Bonjour {user.username}
      </h1>
      
      <Row>
        <Col md="2">
          <Image
            width={200}
            height={200}
            alt={user.name}
            src={user.avatar}
            thumbnail
            rounded
          />
        </Col>
        <Col>
          <p>
            Votre nom est : {user.name}
          </p>
          <p>
            Votre adresse email est : {user.email}
          </p>
        </Col>
      </Row> 
    </Container>
  )
}

export default AccountView