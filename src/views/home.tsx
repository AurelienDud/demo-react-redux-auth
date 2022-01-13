import { FunctionComponent } from 'react'
import { Container } from 'react-bootstrap'
import HomeCarousel from '@src/components/homeCarousel'

/**
 * HOME PAGE
 * With some random contents
 */
const HomeView:FunctionComponent = () => (
  <>
    <HomeCarousel />
    <Container className="my-4">
      <h1 className='h3 text-dark'>
        Bienvenue sur ce site de test
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis posuere neque, vel auctor odio. Vestibulum varius tortor nec nulla vehicula finibus ut eu dolor. Fusce sit amet urna eu metus congue pretium. Vestibulum feugiat eget urna quis gravida. Donec condimentum lacus lacus, auctor vehicula turpis molestie eget. Cras sit amet ligula tellus. Nam tortor dui, sagittis vel ipsum ut, commodo tempus lorem. Aenean et justo vehicula, luctus lectus in, bibendum magna. Sed ac aliquam lectus. Ut aliquam nulla sit amet iaculis malesuada. Integer sed faucibus erat. Sed pharetra neque lorem, nec mollis sapien finibus ac.
      </p>
    </Container>
  </>
)

export default HomeView
