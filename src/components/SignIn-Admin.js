// SignIn.js
import React, { useState } from 'react';
import './style/SignIn-Admin.css';

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handleUsernameBlur = () => {
    setIsUsernameFocused(username !== '');
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(password !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sign-in process
    onSignIn({ username, password });
  };

  return (
    <div className='sign'>
      <h1>Welcome Admin!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className={isUsernameFocused ? 'focused' : ''} htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            onFocus={handleUsernameFocus}
            onBlur={handleUsernameBlur}
            required
          />
        </div>
        <div className="form-group">
          <label className={isPasswordFocused ? 'focused' : ''} htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>

    </div>
  );
};

export default SignIn;
