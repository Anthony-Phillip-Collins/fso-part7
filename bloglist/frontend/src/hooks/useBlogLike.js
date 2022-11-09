import { useDispatch, useSelector } from 'react-redux';
import { likeBlog } from '../app/reducers/blogSlice';
import useNotification from './useNotification';

export default function useLikeBlog() {
  const dispatch = useDispatch();
  const notify = useNotification();
  const user = useSelector((state) => state.user);

  return async (id) => {
    if (!user) return;

    try {
      const data = await dispatch(likeBlog(id)).unwrap();
      notify({
        text: `The blog named '${data.title}' has been liked.`,
      });
    } catch (error) {
      notify(error);
    }
  };
}
