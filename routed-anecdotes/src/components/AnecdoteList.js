import { Link } from 'react-router-dom';

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <ul>
      {anecdotes.map(({ content, id }) => (
        <li key={id}>
          <Link to={`/anecdotes/${id}`}>{content}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AnecdoteList;
