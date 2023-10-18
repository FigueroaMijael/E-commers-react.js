import Carousel from 'react-bootstrap/Carousel';
import style from './style.module.css'
import { Button } from 'react-bootstrap';

function IndividualIntervalsExample() {
  return (
    <Carousel >
      <Carousel.Item interval={2000}>
        <img src='https://res.cloudinary.com/dxk4w1xb1/image/upload/v1697239748/ilustracion-3d-luces-tecno-futuristas-ciencia-ficcion-azul-purpura-fondo-fresco_ak4p0z.jpg' className={style.img} alt='Imagen de algo' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button>See More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src='https://res.cloudinary.com/dxk4w1xb1/image/upload/v1697239735/58670_tcjoa9.jpg' className={style.img} alt='Imagen de algo' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Ver mas</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={2000}>
        <img src='https://res.cloudinary.com/dxk4w1xb1/image/upload/v1697239697/58916_e6twbf.jpg' className={style.img}  alt='Imagen de algo' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;