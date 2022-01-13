import React, { FunctionComponent } from 'react'
import { Carousel } from 'react-bootstrap'

/**
 * HOME CAROUSEL
 * That display some random images
 */
const HomeCarousel:FunctionComponent = () => (
  <Carousel>
    {Array(5).fill(null).map((_, index) => (
      <Carousel.Item key={`carouselItem-${index}`}>
        <img
          className="d-block w-100"
          src={`https://picsum.photos/800/300?random=${index}`}
          alt={`image numéro ${index + 1}`}
        />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
)

export default HomeCarousel