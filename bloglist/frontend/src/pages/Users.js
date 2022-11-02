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
              <td>{user.name}</td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
