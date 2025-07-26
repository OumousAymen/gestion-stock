import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supplierService from '../../services/supplierService';

const SuppliersListPage = () => {
    const [suppliers, setSuppliers] = useState([]);
    useEffect(() => { supplierService.getSuppliers().then(setSuppliers); }, []);

    return (
        <div>
            <div className="page-header">
                <h1>Fournisseurs</h1>
                <div className="page-controls">
                    <Link to="/suppliers/new" className="btn btn-primary">Ajouter un fournisseur</Link>
                </div>
            </div>
            <div className="card">
                <table className="modern-table">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Nom du Fournisseur</th>
                            <th>Dernière Commande</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers.map(s => (
                            <tr key={s.id}>
                                <td>{s.code}</td>
                                <td>{s.name}</td>
                                <td>{s.lastOrderDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SuppliersListPage; 