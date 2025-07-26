import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (authService.login(username, password)) {
      navigate('/dashboard');
    } else {
      alert('Échec de la connexion');
    }
  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <form onSubmit={handleLogin}>
          <h2>Connexion</h2>
          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: '10px'}}>Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage; 