import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useAuth() {
  const user = useSelector((state) => state?.user);
  const navigate = useNavigate();
  const loc = useLocation();

  console.log(loc);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/');
    }
  }, [user]);

  return () => {};
}
