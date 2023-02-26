import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/transactions">Budget App</Navbar.Brand>
            <Button variant="primary" href="/entries/new">New Transaction</Button>{' '}
          </Container>
        </Navbar>
      );
}