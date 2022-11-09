import { useSelector } from 'react-redux';
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
      <h1>Blogs</h1>

      <NotificationContainer />

      {user && <BlogFormContainer />}

      {blogs.map((blog) => (
        <BlogContainer key={blog.id} blog={blog} />
      ))}
    </>
  );
}
