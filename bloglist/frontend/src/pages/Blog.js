import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useBlogs from '../hooks/useBlogs';
import useLikeBlog from '../hooks/useBlogLike';
import NotificationContainer from '../components/Notification/NotificationContainer';
import { BlogSchema } from '../components/Blog/Blog';
import useNotification from '../hooks/useNotification';
import { addComment } from '../app/reducers/blogSlice';

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
        <span data-test="likes">{blog.likes} likes</span>{' '}
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

      <h3>comments</h3>

      {user ? (
        <CommentsForm blog={blog} />
      ) : (
        <p>Please log in to leave a comment.</p>
      )}

      <ul>
        {blog?.comments.map(
          (comment, key) =>
            // eslint-disable-next-line react/no-array-index-key
            comment && comment.text && <li key={key}>{comment.text}</li>
        )}
      </ul>
    </>
  );
}

function CommentsForm({ blog }) {
  const [comment, setComment] = useState('');
  const notify = useNotification();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addComment({ id: blog.id, comment })).unwrap();
      notify({
        text: `The comment '${comment}' has been added.`,
      });
    } catch (error) {
      notify(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">add comment</button>
    </form>
  );
}

CommentsForm.propTypes = {
  blog: BlogSchema.isRequired,
};
