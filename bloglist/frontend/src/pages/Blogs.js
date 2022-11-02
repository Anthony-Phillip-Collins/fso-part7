import { useSelector } from 'react-redux';
import { BlogSortTypes } from '../app/reducers/blogSortSlice';
import NotificationContainer from '../components/Notification/NotificationContainer';
import BlogFormContainer from '../components/BlogForm/BlogFormContainer';
import BlogContainer from '../components/Blog/BlogContainer';

export default function Blogs() {
  const blogs = useSelector((state) => {
    switch (state.blogSortType) {
      case BlogSortTypes.LIKES_DESCENDING:
        return [...state.blogs].sort((a, b) => b.likes - a.likes);
      default:
        return state.blogs;
    }
  });

  const user = useSelector((state) => state.user);

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
