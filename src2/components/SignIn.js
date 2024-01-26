// SignIn.js
import React, { useState } from 'react';
import './stylea/SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const SignIn = ({ onSignIn }) => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
      // Naviguer vers la page d'édition lorsqu'on appuie sur le bouton "Edit"
      navigate('/SignUp');
};

const handleProfilClick = () => {
  // Naviguer vers la page d'édition lorsqu'on appuie sur le bouton "Edit"
  navigate('/Profil');
};



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
      <NavBar isHomePage={window.location.pathname === '/SignIn'} />

      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className={isUsernameFocused ? 'focused' : ''} htmlFor="username">Email:</label>
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
        <button type="submit" onClick={handleProfilClick}>Sign In</button>
      </form>
      <p>You don’t have an account?<a onClick={handleSignUpClick}>Sign Up</a></p>
      <div className='juge'>
      <img src='../media/juge.png' />
      </div>

      <Footer />

    </div>
  );
};

export default SignIn;
