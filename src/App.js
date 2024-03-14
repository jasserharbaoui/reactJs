import React from 'react';
import { Navbar, Container, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main content */}
        <Container>
          <h1>Hello, world!</h1>
          
            <Card>
              <Card.Body>
                <Card.Title style={{color:"red"}}>Card 1</Card.Title>
                <Card.Text>This is a card with some content.</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title style={{color:"red"}}>Card 2</Card.Title>
                <Card.Text>This is another card with some content.</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title style={{color:"red"}}>Card 3</Card.Title>
                <Card.Text>This is yet another card with some content.</Card.Text>
              </Card.Body>
            </Card>
          
        </Container>
      </div>
    </>
  );
}

export default App;
