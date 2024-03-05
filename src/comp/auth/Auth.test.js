import { describe, expect, test } from 'vitest';
import { signupProcess } from './Auth';

// Server url
const API_URL = 'http://localhost:9001';

// Auth tests
describe('Auth process', () => {
  // Test signup process returns user object
  test('Signup process returns user object', async () => {
    // Mock user info
    const user = {
      username: 'testUser',
      password: 'Password',
      confirmPassword: 'Password',
    };

    // Send post request to signup process
    const signupMock = await signupProcess(API_URL, user);

    // Expect a user object to be returned
    expect(signupMock.username).toBeDefined();
  });

  // Will validation error return if user info incorrect
  test('Validation error upon wrong user info', async () => {
    // Mock user info
    const user = {
      username: 'User',
      password: 'Password',
      confirmPassword: 'Password',
    };

    // Send post request to signup process
    const signupMock = await signupProcess(API_URL, user);

    // Expect a user object to be returned
    expect(signupMock.validationError).toBeDefined();
  });
});
