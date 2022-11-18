import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginStatusContainer from '../LoginStatus/LoginStatusContainer';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="justify-content-end">
        {/* <Navbar.Brand /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
          </Nav>
          <LoginStatusContainer />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
