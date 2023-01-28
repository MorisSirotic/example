import Table from "react-bootstrap/Table";
import { useLoaderData } from "react-router-dom";
import { IUser } from "../api/types";

export const UsersTable = () => {
  const users = useLoaderData() as IUser[];

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, indx) => {
          return (
            <tr key={indx}>
              <td>{user.id}</td>
              <td>{user.name.firstname}</td>
              <td>{user.name.lastname}</td>
              <td>{user.username}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
