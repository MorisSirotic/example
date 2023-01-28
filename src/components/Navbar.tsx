import { Container, Navbar } from "react-bootstrap";

export const ResponsiveNavbar = () => {
  return (
    <Navbar bg="primary" collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand href="/">Example Site</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
