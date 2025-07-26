import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        GEST-STOCK
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><NavLink to="/dashboard">Tableau de bord</NavLink></li>
          <li><NavLink to="/products">Produits</NavLink></li>
          <li><NavLink to="/stock-entries">Entrées de stock</NavLink></li>
          <li><NavLink to="/stock-exit">Sorties de stock</NavLink></li>
          <li><NavLink to="/suppliers">Fournisseurs</NavLink></li>
          <li><NavLink to="/global-stats">Statistiques</NavLink></li>
        </ul>
      </nav>
      <button onClick={handleLogout} className="logout-button">Déconnexion</button>
    </div>
  );
};

export default Sidebar; 