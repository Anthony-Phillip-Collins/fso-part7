import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginStatus({ userName, onLogout }) {
  const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
  };

  if (!userName) {
    return (
      <Button as={Link} to="login">
        Log in
      </Button>
    );
  }

  return (
    <div className="d-flex align-items-center" data-test="logout">
      Logged in as <b className="ms-1">{userName}</b>.{' '}
      <form onSubmit={handleLogout} className="ms-1">
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
}

LoginStatus.defaultProps = {
  userName: null,
};

LoginStatus.propTypes = {
  userName: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};
