import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>Page not Found!</h1>
      <Link to="/">Back to Home</Link>
    </>
  );
}
