import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Blog.module.css';

function Blog(props) {
  const [expand, setExpand] = useState(false);
  const { blog, userIsOwner, onLike, onDelete } = props;
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
          <button type="button" onClick={() => onLike(id)} data-test="like">
            like
          </button>
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

const LoggedInUserSchema = PropTypes.shape({
  name: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.string,
});

const BlogUserSchema = PropTypes.shape({
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

const BlogSchema = PropTypes.shape({
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  user: BlogUserSchema.isRequired,
});

Blog.defaultProps = {
  loggedInUser: {
    name: null,
    username: null,
    id: null,
  },
};

Blog.propTypes = {
  blog: BlogSchema.isRequired,
  loggedInUser: LoggedInUserSchema,
  userIsOwner: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Blog;
