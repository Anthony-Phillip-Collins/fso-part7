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
