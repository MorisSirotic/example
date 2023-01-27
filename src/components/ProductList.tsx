import { Container, Row, Col } from "react-bootstrap";
import { Product } from "./Product";

export const ProductList = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Product />
        </Col>
        <Col>
          <Product />
        </Col>
        <Col>
          <Product />
        </Col>
        <Col>
          <Product />
        </Col>
      </Row>
    </Container>
  );
};
