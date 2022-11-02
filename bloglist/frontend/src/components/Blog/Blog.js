import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Blog.module.css';

function Blog(props) {
  const [expand, setExpand] = useState(false);
  const { blog, userIsOwner, userIsLoggedIn, onLike, onDelete } = props;
  const { title, author, url, likes, id, user } = blog;

  return (
    <div className={styles.blog} data-test="blog">
      <div id="test">
        {title} <b>{author}</b>{' '}
        <button
          type="button"
          onClick={() => setExpand(!expand)}
          data-test="expand"
        >
          {expand ? 'hide' : 'view'}
        </button>
      </div>
      {expand && (
        <>
          <div>{url}</div>
          <div data-test="likes">likes {likes}</div>
          {userIsLoggedIn && (
            <button type="button" onClick={() => onLike(id)} data-test="like">
              like
            </button>
          )}
          <div>{user.name}</div>
          {userIsOwner && (
            <button
              type="button"
              onClick={() => onDelete(blog)}
              data-test="delete"
            >
              remove
            </button>
          )}
        </>
      )}
    </div>
  );
}

export const BlogUserSchema = PropTypes.shape({
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export const BlogSchema = PropTypes.shape({
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  user: BlogUserSchema.isRequired,
});

Blog.propTypes = {
  blog: BlogSchema.isRequired,
  userIsOwner: PropTypes.bool.isRequired,
  userIsLoggedIn: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Blog;
