import { useSelector } from 'react-redux';
import Notification from './Notification';

function NotificationContainer() {
  const notification = useSelector((state) => state.notification);
  const { text, isError } = notification;
  return <Notification text={text} isError={isError} />;
}

export default NotificationContainer;
