import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1 className="pt-4 pb-4">Page not Found :(</h1>
      <Button as={Link} to="/">
        Back to Home
      </Button>
    </>
  );
}
