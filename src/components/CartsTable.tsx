import Table from "react-bootstrap/Table";
import { useLoaderData } from "react-router-dom";
import { ICart } from "../api/types";

export const CartsTable = () => {
  const carts = useLoaderData() as ICart[];

  return (
    <Table striped bordered hover size="l">
      <thead>
        <tr>
          <th>#</th>
          <th>User ID</th>
          <th>Cart Stugg</th>
        </tr>
      </thead>
      <tbody>
        {carts.map((cart, indx) => {
          return (
            <tr key={indx}>
              <td>{cart.id}</td>
              <td>{cart.userId}</td>
              <td>{cart.date.replace("T00:00:02.000Z", "")}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
