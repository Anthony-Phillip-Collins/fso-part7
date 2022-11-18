import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import NotificationContainer from '../components/Notification/NotificationContainer';
import BlogFormContainer from '../components/BlogForm/BlogFormContainer';
import BlogContainer from '../components/Blog/BlogContainer';
import useBlogs from '../hooks/useBlogs';

export default function Blogs() {
  const blogs = useBlogs();
  const user = useSelector((state) => state.user);

  if (!blogs) return null;

  return (
    <>
      <h1 className="pt-4 pb-4">Blogs</h1>

      <NotificationContainer />

      {user && <BlogFormContainer />}

      <ListGroup>
        {blogs.map((blog) => (
          <ListGroup.Item>
            <BlogContainer key={blog.id} blog={blog} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
