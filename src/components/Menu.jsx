import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'


function Menu() {

    return (
      <Navbar collapseOnSelect expand="lg" bg="blueviolet" variant="dark" fixed="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src="./src/img/logo-tipo.png" width="150" height="100"></img>
              <i>Library</i>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sobre">
                <Nav.Link>Sobre</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/funcionalidades">
                <Nav.Link>Funcionalidades</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contato">
                <Nav.Link>Contato</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Menu;

