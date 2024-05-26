import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { loginWithEmail, registerWithEmail } from '../auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import '@material/web/button/filled-button.js';
import './pagesStyles/loginSignup.css';

function LoginSignup() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupLastName, setSignupLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User logged in:', result.user);
      // Falta código para redirigir post login
    } catch (error) {
      console.error('Error logging in with Google:', error);
      setError('Error al iniciar sesión con Google. Inténtalo de nuevo.');
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await loginWithEmail(loginEmail, loginPassword);
      console.log('User logged in:', user);
      // Redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
      console.error(error);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signupPassword !== signupConfirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    try {
      const user = await registerWithEmail(signupEmail, signupPassword);
      console.log('User registered:', user);
      // Redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      setError('Error al registrarse. Inténtalo de nuevo.');
      console.error(error);
    }
  };

  return (
    <>
      <div className="loginHeader">
        <h1>Mi cuenta</h1>
        <Link to='/'>Inicio</Link>
        <p>&gt;</p>
        <p>Login / SignUp</p>
      </div>
      <div className="formsContainer">
        <form className="loginForm" onSubmit={handleLoginSubmit}>
          <h3>Ingresar</h3>
          <label>Email:</label>
          <input 
            type="email" 
            value={loginEmail} 
            onChange={(e) => setLoginEmail(e.target.value)} 
            required 
          />
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={loginPassword} 
            onChange={(e) => setLoginPassword(e.target.value)} 
            required 
          />
          <button type="submit">Iniciar sesión</button>
          <md-filled-button onClick={handleGoogleLogin}>
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="google-logo" />
            Iniciar sesión con Google
          </md-filled-button>
          <p>¿Olvidaste tu contraseña?</p>
        </form>
        <form className="signupForm" onSubmit={handleSignupSubmit}>
          <h3>Regístrate</h3>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={signupName} 
            onChange={(e) => setSignupName(e.target.value)} 
            required 
          />
          <label>Apellidos:</label>
          <input 
            type="text" 
            value={signupLastName} 
            onChange={(e) => setSignupLastName(e.target.value)} 
            required 
          />
          <label>Correo:</label>
          <input 
            type="email" 
            value={signupEmail} 
            onChange={(e) => setSignupEmail(e.target.value)} 
            required 
          />
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={signupPassword} 
            onChange={(e) => setSignupPassword(e.target.value)} 
            required 
          />
          <label>Repita su Contraseña:</label>
          <input 
            type="password" 
            value={signupConfirmPassword} 
            onChange={(e) => setSignupConfirmPassword(e.target.value)} 
            required 
          />
          <button type="submit">Registrarse</button>
        </form>
      </div>
      {error && <p className="error">{error}</p>}
    </>
  );
}

export default LoginSignup;