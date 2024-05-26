import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { loginWithEmail, registerWithEmail } from '../auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Nav from '../components/navBar';
import Footer from '../components/footer';
import { auth } from '../firebaseConfig';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './pagesStyles/loginSignup.css';
import { Button } from '@mui/material';

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
      // Redirigir al usuario o mostrar un mensaje de éxito
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
      <Nav />
      <Box className="loginHeader" sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Typography variant="h4">Mi cuenta</Typography>
        <Link to='/'>Inicio</Link>
        <Typography variant="body1">&gt;</Typography>
        <Typography variant="body1">Login / SignUp</Typography>
      </Box>
      <Box className="formsContainer" sx={{ display: 'flex', justifyContent: 'space-around', padding:'24px' }}>
        <Box component="form" className="loginForm" onSubmit={handleLoginSubmit} sx={{ display: 'flex', flexDirection: 'column', width: 300, padding: 2, border: '1px solid #ccc', borderRadius: 1, backgroundColor: '#f9f9f9' }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Ingresar</Typography>
          <TextField 
            label="Email"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField 
            label="Contraseña"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <Button  className='btn' variant="contained" type="submit" sx={{ marginBottom: 2 }}>Iniciar sesión</Button>
          <Button 
          className='btn-outline-primary'
            variant="contained" 
            onClick={handleGoogleLogin}
            startIcon={<img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="google-logo" />}
            sx={{ marginBottom: 2 }}
          >
            Iniciar sesión con Google
          </Button >
          <Typography variant="body2">¿Olvidaste tu contraseña?</Typography>
        </Box>
        <Box component="form" className="signupForm" onSubmit={handleSignupSubmit} sx={{ display: 'flex', flexDirection: 'column', width: 300, padding: 2, border: '1px solid #ccc', borderRadius: 1, backgroundColor: '#f9f9f9' }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Regístrate</Typography>
          <TextField 
            label="Nombre"
            type="text"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField 
            label="Apellidos"
            type="text"
            value={signupLastName}
            onChange={(e) => setSignupLastName(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField 
            label="Correo"
            type="email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField 
            label="Contraseña"
            type="password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField 
            label="Repita su Contraseña"
            type="password"
            value={signupConfirmPassword}
            onChange={(e) => setSignupConfirmPassword(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <Button className='btn' variant="contained" type="submit">Registrarse</Button>
        </Box>
      </Box>
      {error && <Typography variant="body2" color="error" sx={{ textAlign: 'center', marginTop: 2 }}>{error}</Typography>}
      <Footer />
    </>
  );
}

export default LoginSignup;