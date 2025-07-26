import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import stockEntryService from '../../services/stockEntryService';
import supplierService from '../../services/supplierService';

const StockEntryDetailPage = () => {
    const { entryId } = useParams();
    const [entry, setEntry] = useState(null);
    const [supplierName, setSupplierName] = useState('');

    useEffect(() => {
        stockEntryService.getEntryById(entryId).then(entryData => {
            setEntry(entryData);
            if (entryData) {
                supplierService.getSupplierById(entryData.supplierId).then(s => setSupplierName(s.name));
            }
        });
    }, [entryId]);

    if (!entry) return <div className="card"><p>Chargement...</p></div>;

    return (
        <div>
            <div className="page-header">
                <h1>Détail Entrée : {entry.id}</h1>
                <div className="page-controls"><Link to="/stock-entries" className="btn btn-secondary">← Retour</Link></div>
            </div>
            <div className="card">
                <div className="card-header">Informations</div>
                <div className="detail-field"><label>Date</label><span>{entry.date}</span></div>
                <div className="detail-field"><label>Fournisseur</label><span>{supplierName}</span></div>
                <div className="detail-field"><label>Valeur Totale</label><span>{entry.totalPrice.toFixed(2)} DH</span></div>
            </div>
            <div className="card">
                <div className="card-header">Produits</div>
                <table className="modern-table">
                    <thead><tr><th>Produit</th><th>Quantité</th><th>Prix Unitaire</th><th>Sous-total</th></tr></thead>
                    <tbody>
                        {entry.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.productName} ({item.productId})</td>
                                <td>{item.quantity}</td>
                                <td>{item.unitPrice.toFixed(2)} DH</td>
                                <td>{(item.quantity * item.unitPrice).toFixed(2)} DH</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockEntryDetailPage; 