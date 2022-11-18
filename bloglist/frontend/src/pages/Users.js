import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useUsers from '../hooks/useUsers';

export default function Users() {
  const users = useUsers();
  return (
    <>
      <h1 className="pt-4 pb-4">Users</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
