import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {
  const [signIn, setSignIn] = useState("Sign In");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'amaljith829@gmail.com' && password === '1234') {
      // Redirect to home page or perform successful login actions
      window.location.href = '/home';
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='login'>
      <img src={logo} alt='logo' className='login-logo' />
      <div className="login-form">
        <h1>{signIn}</h1>
        <form onSubmit={handleLogin}>
          {signIn === "Sign In" ? <input type='text' placeholder='Your name' /> : <></>}
          <input
            type='email'
            placeholder='Email or phone number'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className='error'>{error}</p>}
          <button type='submit'>Sign In</button>
          <div className='form-help'>
            <div className="remember-me">
              <input type='checkbox' />
              <label htmlFor=''>Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signIn === "Sign In" ?
            <p>New to Netflix? <span onClick={() => setSignIn("Sign Up")}>Sign up now.</span></p>
            : <p>Already have account?<span onClick={() => setSignIn("Sign In")}>Sign In now.</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login;