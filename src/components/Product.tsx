import { Button, Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { IProduct } from "../api/types";

export const Product = () => {
  const product = useLoaderData() as IProduct;

  return (
    <Card style={{ maxWidth: "720px", margin: "18px"}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
