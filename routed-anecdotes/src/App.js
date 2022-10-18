import Menu from './components/Menu';
import Footer from './components/Footer';
import Notification from './components/Notification';
import About from './pages/About';
import { Route, Routes, useMatch } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Anecdote from './pages/Anecdote';
import { useSelector } from 'react-redux';

const App = () => {
  // const [anecdotes, setAnecdotes] = useState([
  //   {
  //     content: 'If it hurts, do it more often',
  //     author: 'Jez Humble',
  //     info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
  //     votes: 0,
  //     id: 1,
  //   },
  //   {
  //     content: 'Premature optimization is the root of all evil',
  //     author: 'Donald Knuth',
  //     info: 'http://wiki.c2.com/?PrematureOptimization',
  //     votes: 0,
  //     id: 2,
  //   },
  // ]);

  // const [notification, setNotification] = useState('');

  // const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  // const vote = (id) => {
  //   const anecdote = anecdoteById(id);

  //   const voted = {
  //     ...anecdote,
  //     votes: anecdote.votes + 1,
  //   };

  //   setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  // };

  const anecdotes = useSelector((state) => state.anecdotes);

  const matchAnecdoteId = useMatch('/anecdotes/:id');
  const anecdote =
    matchAnecdoteId &&
    anecdotes.find(
      ({ id }) => id.toString() === matchAnecdoteId.params.id.toString()
    );

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notification />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='create' element={<Create />} />
        <Route path='about' element={<About />} />
        <Route
          path='/anecdotes/:id'
          element={<Anecdote anecdote={anecdote} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
