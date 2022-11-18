import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaChevronRight as Chevron } from 'react-icons/fa';

function Blog(props) {
  const [expand, setExpand] = useState(false);
  const { blog, userIsOwner, userIsLoggedIn, onLike, onDelete, expandable } =
    props;
  const { title, author, url, likes, id, user } = blog;

  const toggle = () => {
    setExpand(!expand);
  };

  return (
    <div data-test="blog">
      <div id="test" className="d-flex">
        <Link to={`/blogs/${id}`} className="text-decoration-none">
          {title} <b>{author}</b> <Chevron size={13} className="ms-1" />
        </Link>
        {expandable && <ExpandButton expand={expand} toggle={toggle} />}
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

function ExpandButton({ expand, toggle }) {
  return (
    <button
      type="button"
      onClick={() => toggle()}
      data-test="expand"
      style={{ opacity: '0' }}
    >
      {expand ? 'hide' : 'view'}
    </button>
  );
}

ExpandButton.propTypes = {
  expand: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

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

Blog.defaultProps = {
  expandable: true,
};

Blog.propTypes = {
  blog: BlogSchema.isRequired,
  userIsOwner: PropTypes.bool.isRequired,
  userIsLoggedIn: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  expandable: PropTypes.bool,
};

export default Blog;
