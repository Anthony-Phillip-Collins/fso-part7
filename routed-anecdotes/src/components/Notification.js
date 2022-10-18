import { useSelector } from 'react-redux';

const Notification = () => {
  const { text } = useSelector((state) => state.notification);

  const style = {
    border: 'solid',
    padding: '1rem',
    marginTop: '1rem',
    borderWidth: 1,
  };

  return text && <div style={style}>{text}</div>;
};

export default Notification;
