import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, Route, Routes } from 'react-router-dom';
import { getAllBlogs } from './app/reducers/blogSlice';
import { BlogSortTypes, sortBlogs } from './app/reducers/blogSortSlice';
import Header from './components/Header/Header';
import useNotification from './hooks/useNotification';
import Blogs from './pages/Blogs';
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
        <Route path="login" element={<Login />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
