import { Link } from 'react-router-dom';
import LoginStatusContainer from '../LoginStatus/LoginStatusContainer';

export default function Navigation() {
  return (
    <>
      <Link to="/">blogs</Link>
      <Link to="/users">users</Link>
      <LoginStatusContainer />
      <div />
    </>
  );
}
