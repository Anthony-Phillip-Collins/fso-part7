import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useBlogs from '../hooks/useBlogs';
import useLikeBlog from '../hooks/useBlogLike';
import NotificationContainer from '../components/Notification/NotificationContainer';

export default function Blog() {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const blogs = useBlogs();
  const blog = blogs.find((b) => b.id === id);
  const likeBlog = useLikeBlog();

  if (!blog) return null;

  return (
    <>
      <NotificationContainer />

      <h2>{blog.title}</h2>
      <p>
        <a href={blog.url}>{blog.url}</a>
      </p>
      <p>
        {blog.likes} likes{' '}
        {user && (
          <button
            type="button"
            onClick={() => {
              likeBlog(id);
            }}
            data-test="like"
          >
            like
          </button>
        )}
      </p>
      <p>added by {blog.user.name}</p>
    </>
  );
}
