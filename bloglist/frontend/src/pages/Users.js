import { Link } from 'react-router-dom';
import useUsers from '../hooks/useUsers';

export default function Users() {
  const users = useUsers();
  return (
    <>
      <h1>Users</h1>

      <table>
        <tbody>
          <tr>
            <td />
            <td>
              <b>blogs created</b>
            </td>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
