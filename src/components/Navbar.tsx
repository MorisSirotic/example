import { Navbar, Container } from "react-bootstrap";
import { FaHamburger } from "react-icons/fa";
 

export const ResponsiveNavbar = () => {
  return (
    <Navbar bg="primary" collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand href="/">Example Site</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
