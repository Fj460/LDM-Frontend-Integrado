
'use client';
//import { useState } from 'next/client';
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  //const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8025/auth/login', {
        email,
        password,
      });

      console.log(response);
      if (!(response.status === 200)) {
        throw new Error('Login failed');
      }

     // const data = await response.data;
      const token = await response.data;
      //const token = data.token;
      //console.log(token);

      storeTokenInCookie(token);
     // navigate('/registo');

      // Redirect to a protected page or display success message
      window.location.href = '/'; // Adjust redirect path
      //window.location.href = 'login!';

    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  function storeTokenInCookie(token) {
    document.cookie = `jwtToken=${token}; path=/; expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()}; SameSite=Strict; HttpOnly`;
  }

  return (
    <div className="container">
      <div className="image-container">
        {/* Your image here */}
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          {error && <p className="error">{error}</p>}
          <p>Insira o seu email e password para ter acesso a sua conta</p>
          <div className="grupo">
            <label htmlFor="email" className="label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder="Insira o seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grupo">
            <label htmlFor="password" className="label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input"
              placeholder="Insira Palavra-passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="enviar">Enviar</button>
          <p className="autenticacao">
            <a href="recuperarpasse">Esqueceste a palavra-passe</a>
          </p>
        </form>
      </div>
    </div>
  );
}
