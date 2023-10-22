import Carousel from 'react-bootstrap/Carousel';
import style from './style.module.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function IndividualIntervalsExample() {
  return (
    <Carousel >
      <Carousel.Item interval={2000}>
        <img src='https://res.cloudinary.com/dxk4w1xb1/image/upload/v1697239748/ilustracion-3d-luces-tecno-futuristas-ciencia-ficcion-azul-purpura-fondo-fresco_ak4p0z.jpg' className={style.img} alt='Imagen de algo' text="First slide" />
        <Carousel.Caption>
          <h3>Las Mejores consolas de la actualidad</h3>
          <p>Mira y fasinate con nuestras consolas y divertite a lo maximo</p>
          <Link to={'/categorias/consoles'}><Button>See More</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src='https://res.cloudinary.com/dxk4w1xb1/image/upload/v1697239735/58670_tcjoa9.jpg' className={style.img} alt='Imagen de algo' text="Second slide" />
        <Carousel.Caption>
          <h3> Consigue buenos perifericos </h3>
          <p>Hace de tu experiencia mucho mejor con buenos perifericos</p>
          <Link to={'/categorias/peripherals'}><Button>See More</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={2000}>
        <img src='https://res.cloudinary.com/dxk4w1xb1/image/upload/v1697239697/58916_e6twbf.jpg' className={style.img}  alt='Imagen de algo' text="Third slide" />
        <Carousel.Caption>
          <h3>Convertite en Programador</h3>
          <p>Programa de la mejor manera con nuestras notebooks</p>
          <Link to={'/categorias/notebook'}><Button>See More</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;