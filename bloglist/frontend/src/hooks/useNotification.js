import { useDispatch } from 'react-redux';
import { setNotification } from '../app/reducers/notificationSlice';

export default function useNotification() {
  const dispatch = useDispatch();
  return (args) => dispatch(setNotification(args));
}
