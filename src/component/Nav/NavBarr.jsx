import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget'


const NavBarr = () => {
  return (

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <NavbarBrand href="#Home">PROGRAMMING</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#link"><NavLink className={({isActive}) => isActive ? "link-active" : "links"} to="/">Home</NavLink></Nav.Link>
            <Nav.Link href="#link"><NavLink className={({isActive}) => isActive ? "link-active" : "links"} to="/categorias"> Categorias</NavLink></Nav.Link>
            <NavDropdown id="basic-nav-dropdown">
              <Nav.Link><NavLink className={( { isActive} ) => isActive ? "link-active" : "links"} to="/categorias/jewelery">joyas</NavLink></Nav.Link>
              <Nav.Link><NavLink className={( { isActive} ) => isActive ? "link-active" : "links"} to="/categorias/women's clothing">mujer</NavLink></Nav.Link>
              <Nav.Link><NavLink className={( { isActive} ) => isActive ? "link-active" : "links"} to="/categorias/men's clothing">hombre</NavLink></Nav.Link>
              <Nav.Link><NavLink className={( { isActive} ) => isActive ? "link-active" : "links"} to="/categorias/electronics">electro</NavLink></Nav.Link>
            </NavDropdown>
            <Nav.Link><NavLink className={({isActive}) => isActive ? "link-active" : "links"} to="/contactos">Contacto</NavLink></Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBarr