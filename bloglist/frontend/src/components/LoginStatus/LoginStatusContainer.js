import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../app/reducers/userSlice';
import LoginStatus from './LoginStatus';

export default function LoginStatusContainer() {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return <LoginStatus onLogout={onLogout} userName={user?.name} />;
  // ) : (
  //   <Link to="login">login</Link>
  // );
}
