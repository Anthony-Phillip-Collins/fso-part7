import { ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaChevronRight as Chevron } from 'react-icons/fa';
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
      <h1 className="pt-4 pb-4">{user.name}</h1>
      <h2 className="pt-4 pb-4">added blogs:</h2>
      <ListGroup>
        {user.blogs.map((blog) => (
          <ListGroup.Item key={blog.id}>
            <Link to={`/blogs/${blog.id}`} className="text-decoration-none">
              {blog.title} <b>{blog.author}</b>{' '}
              <Chevron size={13} className="ms-1" />
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
