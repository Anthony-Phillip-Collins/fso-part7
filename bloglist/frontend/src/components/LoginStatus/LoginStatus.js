import PropTypes from 'prop-types';

export default function LoginStatus({ userName, onLogout }) {
  const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
  };

  return (
    <div style={{ marginBottom: '2rem' }} data-test="logout">
      Logged in as <b>{userName}</b>.{' '}
      <form onSubmit={handleLogout} style={{ display: 'inline' }}>
        <button type="submit">Log out</button>
      </form>
    </div>
  );
}

LoginStatus.propTypes = {
  userName: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
