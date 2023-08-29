import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">BugTracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/tickets">Tickets</Nav.Link>
          </Nav>
          <Navbar.Text>
            <Button variant="primary">Login</Button>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
};