import { Container, Navbar } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='#'>EpiMeteo</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
