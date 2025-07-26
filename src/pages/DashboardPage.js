import React from 'react';

const DashboardPage = () => {
  const mockAlerts = [
    "Stock bas pour 'CLAVIER MECANIQUE' (KB01): 5 restants.",
    "Le produit 'SOURIS SANS FIL' (MS03) est en rupture de stock.",
  ];

  return (
    <div>
      <h1 className="page-header">Tableau de Bord</h1>
      <div className="dashboard-grid">
        <div className="card">
            <div className="card-header">Bienvenue !</div>
            <p>Votre espace de gestion centralisé. Consultez les alertes, naviguez via le menu, et gardez le contrôle de votre inventaire.</p>
        </div>
        <div className="card alerts-card">
            <div className="card-header">Alertes Récentes</div>
            {mockAlerts.length > 0 ? (
                <ul>{mockAlerts.map((alert, index) => <li key={index}>{alert}</li>)}</ul>
            ) : (
                <p>Aucune alerte pour le moment.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 