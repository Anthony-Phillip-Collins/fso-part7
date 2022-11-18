import LoginFormContainer from '../components/LoginForm/LoginFormContainer';
import NotificationContainer from '../components/Notification/NotificationContainer';
import useAuth from '../hooks/useAuth';

export default function Login() {
  useAuth();

  return (
    <>
      <h1 className="pt-4 pb-4">Log in</h1>

      <NotificationContainer />
      <LoginFormContainer />
    </>
  );
}
