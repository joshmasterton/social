/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiAlienSkull } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { Label } from '../utility/Label';
import { Button } from '../utility/Button';
import './style/Auth.scss';

// Auth component
export function Auth({ isLogin }) {
  // Auth info
  const [authInfo, setAuthInfo] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  // Validation error
  const isValidationError = () => {
    if (authInfo.username === ''
      && authInfo.password === ''
      && authInfo.confirmPassword === ''
    ) {
      return null;
    }
    if (authInfo.username.length < 6) {
      return { error: 1, message: 'Username must be at least 6 characters' };
    }
    if (authInfo.password.length < 6) {
      return { error: 2, message: 'Password must be at least 6 characters' };
    }
    if (authInfo.confirmPassword !== authInfo.password) {
      return { error: 3, message: 'Passwords must match' };
    }
    return null;
  };

  // On input change
  const inputChange = (e, value) => setAuthInfo({
    ...authInfo,
    [value]: e.target.value,
  });

  // Navigation location
  const navigate = useNavigate();

  // Navigate to home page
  const login = () => navigate('/');

  // Render Auth
  return (
    <form id="auth" method="post">
      <header>
        <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      </header>
      <main>
        <Label
          name="username"
          title="Username"
          type="text"
          icon={<GiAlienSkull />}
          changeFunction={inputChange}
        />
        {isValidationError()?.error === 1
          ? (
            <div>
              <IoClose />
              {isValidationError()?.message}
            </div>
          ) : ''}
        <Label
          name="password"
          title="Password"
          type="password"
          icon={<GiAlienSkull />}
          changeFunction={inputChange}
        />
        {isValidationError()?.error === 2
          ? (
            <div>
              <IoClose />
              {isValidationError()?.message}
            </div>
          ) : ''}
        {isLogin ? null : (
          <>
            <Label
              name="confirmPassword"
              title="Confirm Password"
              type="password"
              icon={<GiAlienSkull />}
              changeFunction={inputChange}
            />
            {isValidationError()?.error === 3
              ? (
                <div>
                  <IoClose />
                  {isValidationError()?.message}
                </div>
              ) : ''}
          </>
        )}
        <Button
          name={isLogin ? 'Login' : 'Signup'}
          type="submit"
          clickFunction={login}
          showName
        />
      </main>
      <footer>
        <div>
          {isLogin
            ? 'Dont have an account?'
            : 'Already have an account?'}
        </div>
        <Link to={isLogin ? '/signup' : '/login'}>
          {isLogin ? 'Signup' : 'Login'}
        </Link>
      </footer>
    </form>
  );
}
