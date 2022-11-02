import LoginFormContainer from '../components/LoginForm/LoginFormContainer';
import NotificationContainer from '../components/Notification/NotificationContainer';
import useAuth from '../hooks/useAuth';

export default function Login() {
  useAuth();

  return (
    <>
      <h2>Log in</h2>
      <NotificationContainer />
      <LoginFormContainer />
    </>
  );
}
