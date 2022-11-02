import PropTypes from 'prop-types';

function LoginForm({ onSubmit, username, setUsername, password, setPassword }) {
  const handleLogin = async (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
      data-test="login-form"
    >
      <label>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
          data-test="username"
        />
      </label>
      <label>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
          data-test="password"
        />
      </label>
      <button type="submit">login</button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default LoginForm;
