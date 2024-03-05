/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Send auth info to server
export const signupProcess = async (API_URL, authInfo) => {
  // Fetch request for auth verification
  try {
    const signupRequest = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(authInfo),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token',
      },
    });

    // Response from server
    const responsesignupRequest = await signupRequest.json();

    // Return result
    return responsesignupRequest;
  } catch (err) {
    // Return error if fetch fails
    return console.log(err);
  }
};

// Auth component
export function Auth({ authType, API_URL }) {
  // Auth form variables
  const [authInfo, setAuthInfo] = useState({
    username: 'TestUser',
    password: 'Password',
    confirmPassword: 'Password',
  });

  // Auth update info
  const onAuthInputChange = (e, value) => setAuthInfo({
    ...authInfo,
    [value]: e.target.value,
  });

  // Render Auth
  return (
    <form id="auth" method="POST">
      <h1>{authType === 'login' ? 'Login' : 'Signup'}</h1>
      <main>
        <label htmlFor="username">
          Username
          <input
            id="username"
            type="text"
            value={authInfo.username}
            onChange={(e) => { onAuthInputChange(e, 'username'); }}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            value={authInfo.password}
            onChange={(e) => onAuthInputChange(e, 'password')}
          />
        </label>
        {authType === 'login' ? null : (
          <label htmlFor="confirmPassword">
            Confirm Password
            <input
              id="confirmPassword"
              type="password"
              value={authInfo.confirmPassword}
              onChange={(e) => onAuthInputChange(e, 'confirmPassword')}
            />
          </label>
        )}
        <button
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            await signupProcess(API_URL, authInfo);
          }}
        >
          {authType === 'login' ? 'Login' : 'Signup'}
        </button>
      </main>
      <footer>
        <div>
          {authType === 'login'
            ? 'Dont have an account?'
            : 'Already have an account?'}
        </div>
        <Link to={authType === 'login'
          ? '/signup'
          : '/login'}
        >
          {authType === 'login' ? 'Signup' : 'Login'}
        </Link>
      </footer>
    </form>
  );
}
