import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreateForm from '../components/CreatForm';
import { addAnecdote } from '../features/anecdoteSlice';
import { setNotification } from '../features/notificationSlice';

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddNew = (payload) => {
    dispatch(addAnecdote(payload));
    dispatch(setNotification({ text: `Created Anecdote: ${payload.content}` }));
    navigate('/');
  };
  return (
    <>
      <h2>create a new anecdote</h2>
      <CreateForm addNew={onAddNew} />
    </>
  );
};

export default Create;
