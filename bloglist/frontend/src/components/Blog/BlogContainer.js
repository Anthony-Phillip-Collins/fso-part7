import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog } from '../../app/reducers/blogSlice';
import useLikeBlog from '../../hooks/useBlogLike';
import useNotification from '../../hooks/useNotification';
import Blog, { BlogSchema } from './Blog';

export default function BlogContainer({ blog }) {
  const user = useSelector((state) => state.user);
  const notify = useNotification();
  const dispatch = useDispatch();
  const likeBlog = useLikeBlog();

  const onBlogDelete = async ({ id, title, author }) => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`Remove blog "${title}" by ${author}?`)) {
      try {
        await dispatch(deleteBlog(id)).unwrap();
        notify({
          text: `Blog deleted.`,
        });
      } catch (error) {
        notify(error);
      }
    }
  };

  return (
    <Blog
      key={blog.id}
      blog={blog}
      userIsOwner={blog.user.username === (user || {}).username}
      userIsLoggedIn={!!user}
      onLike={likeBlog}
      onDelete={onBlogDelete}
      expandable
    />
  );
}

BlogContainer.propTypes = {
  blog: BlogSchema.isRequired,
};
