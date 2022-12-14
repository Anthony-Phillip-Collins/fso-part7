import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getAllBlogs } from './app/reducers/blogSlice';
import { BlogSortTypes, sortBlogs } from './app/reducers/blogSortSlice';
import User from './pages/User';
import useNotification from './hooks/useNotification';
import Layout from './components/Layout';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Users from './pages/Users';

export default function App() {
  const dispatch = useDispatch();
  const notify = useNotification();

  useEffect(() => {
    const init = async () => {
      try {
        await dispatch(getAllBlogs()).unwrap();
        dispatch(sortBlogs(BlogSortTypes.LIKES_DESCENDING));
      } catch (error) {
        notify(error);
      }
    };
    init();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Blogs />} />
        <Route path="blogs/:id" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
