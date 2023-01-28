import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { IProduct } from "../api/types";

export const ProductList = () => {
  const products = useLoaderData() as IProduct[];

  return (
    <Container className="mt-5">
      <Row>
        {products.map((prod, indx) => {
          return (
            <Col style={{display:"flex",justifyContent:"center"}} key={indx}>
              <ProductCard product={prod} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const ProductCard = (props: { product: IProduct }) => {
  const { product } = props;

  return (
    <Card style={{ width: "18rem", margin: "18px" }}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/products/${product.id}`}
      >
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "15rem" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Badge bg="secondary">{product.category}</Badge>

          <Card.Text>€{product.price}</Card.Text>
          <Card.Text>{product.rating?.rate} / 5</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-center">
          <Button variant="primary">Do something</Button>
        </div>
      </Link>
    </Card>
  );
};
