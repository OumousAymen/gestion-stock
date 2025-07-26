import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import stockEntryService from '../../services/stockEntryService';
import supplierService from '../../services/supplierService';

const StockEntriesListPage = () => {
    const [entries, setEntries] = useState([]);
    const [suppliers, setSuppliers] = useState(new Map());
    const navigate = useNavigate();

    useEffect(() => {
        stockEntryService.getEntries().then(setEntries);
        supplierService.getSuppliers().then(data => setSuppliers(new Map(data.map(s => [s.id, s.name]))));
    }, []);

    return (
        <div>
            <div className="page-header">
                <h1>Entrées de Stock</h1>
                <div className="page-controls">
                    <Link to="/stock-entries/new" className="btn btn-primary">Nouvelle Entrée</Link>
                </div>
            </div>
            <div className="card">
                <table className="modern-table">
                    <thead>
                        <tr>
                            <th>ID Entrée</th>
                            <th>Date</th>
                            <th>Fournisseur</th>
                            <th>Qté. Totale</th>
                            <th>Prix Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map(entry => (
                            <tr key={entry.id} className="clickable-row" onClick={() => navigate(`/stock-entries/${entry.id}`)}>
                                <td>{entry.id}</td>
                                <td>{entry.date}</td>
                                <td>{suppliers.get(entry.supplierId) || '...'}</td>
                                <td>{entry.totalQuantity}</td>
                                <td>{entry.totalPrice.toFixed(2)} DH</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockEntriesListPage; 