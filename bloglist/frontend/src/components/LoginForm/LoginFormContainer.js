import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../app/reducers/userSlice';
import useNotification from '../../hooks/useNotification';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const notify = useNotification();

  const onLogin = async () => {
    try {
      await dispatch(login({ username, password })).unwrap();
    } catch (error) {
      notify(error);
    }
  };

  return (
    <LoginForm
      onSubmit={onLogin}
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
    />
  );
}
