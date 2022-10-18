import { useSelector } from 'react-redux';
import AnecdoteList from '../components/AnecdoteList';

const Home = () => {
  const anecdotes = useSelector((state) => {
    return state.anecdotes;
  });

  return (
    <>
      <h2>Anecdotes</h2>
      <AnecdoteList anecdotes={anecdotes} />
    </>
  );
};

export default Home;
