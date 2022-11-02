import { useParams } from 'react-router-dom';
import useUsers from '../hooks/useUsers';

export default function User() {
  const { id } = useParams();
  const users = useUsers();
  const user = users.find((u) => u.id === id);

  if (!user) {
    return null;
  }

  return (
    <>
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </>
  );
}
