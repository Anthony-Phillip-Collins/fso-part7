import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  likeBlog,
} from './app/reducers/blogSlice';
import { BlogSortTypes, sortBlogs } from './app/reducers/blogSortSlice';
import { setNotification } from './app/reducers/notificationSlice';
import { login, logout } from './app/reducers/userSlice';
import Blog from './components/Blog/Blog';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import NotificationContainer from './components/Notification/NotificationContainer';
import Toggleable from './components/Toggleable';

function App() {
  const blogs = useSelector((state) => {
    switch (state.blogSortType) {
      case BlogSortTypes.LIKES_DESCENDING:
        return [...state.blogs].sort((a, b) => b.likes - a.likes);
      default:
        return state.blogs;
    }
  });

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const toggleRef = useRef();
  const blogFormRef = useRef();

  const notify = (args) => dispatch(setNotification(args));

  const onLogin = async ({ username, password }) => {
    try {
      const { error } = await dispatch(login({ username, password }));
      if (error) {
        notify({ error });
      }
    } catch (error) {
      notify({ error });
    }
  };

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const onBlogCreate = async ({ title, author, url }) => {
    const blog = { title, author, url };
    try {
      const data = dispatch(createBlog(blog)).unwrap();
      notify({
        text: `The blog named '${data.title}' has been added.`,
      });

      blogFormRef.current.clearFields();
      toggleRef.current.toggle();
    } catch (error) {
      notify({ error });
    }
  };

  const onBlogLike = async (id) => {
    try {
      const blog = await dispatch(likeBlog(id)).unwrap();
      notify({
        text: `The blog named '${blog.title}' has been updated.`,
      });
    } catch (error) {
      notify({ error });
    }
  };

  const onBlogDelete = async ({ id, title, author }) => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`Remove blog "${title}" by ${author}?`)) {
      try {
        await dispatch(deleteBlog(id));
        notify({
          text: `Blog deleted.`,
        });
      } catch (error) {
        notify({ error });
      }
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        await dispatch(getAllBlogs());
        dispatch(sortBlogs(BlogSortTypes.LIKES_DESCENDING));
      } catch (error) {
        console.error(error.message);
      }
    };
    init();
  }, []);

  if (user) {
    return (
      <>
        <h2>blogs</h2>

        <NotificationContainer />

        <div style={{ marginBottom: '2rem' }} data-test="logout">
          Logged in as <b>{user.name}</b>.{' '}
          <form onSubmit={onLogout} style={{ display: 'inline' }}>
            <button type="submit">Log out</button>
          </form>
        </div>

        <h2>create new</h2>
        <div style={{ marginBottom: '2rem' }}>
          <Toggleable
            buttonLabelShow="create"
            buttonLabelHide="cancel"
            ref={toggleRef}
          >
            <BlogForm create={onBlogCreate} ref={blogFormRef} />
          </Toggleable>
        </div>

        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            userIsOwner={blog.user.username === (user || {}).username}
            onLike={onBlogLike}
            onDelete={onBlogDelete}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <h2>Log in</h2>
      <NotificationContainer />
      <LoginForm login={onLogin} />
    </>
  );
}

export default App;
