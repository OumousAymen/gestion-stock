import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import supplierService from '../../services/supplierService';

const SupplierFormPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ code: '', name: '' });
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        supplierService.addSupplier(formData).then(() => {
            alert('Fournisseur ajouté !');
            navigate('/suppliers');
        });
    };

    return (
        <div>
            <h1 className="page-header">Ajouter un Fournisseur</h1>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group"><label htmlFor="code">Code Fournisseur</label><input type="text" id="code" name="code" onChange={handleChange} required /></div>
                    <div className="form-group"><label htmlFor="name">Nom du Fournisseur</label><input type="text" id="name" name="name" onChange={handleChange} required /></div>
                    <div className="page-controls" style={{justifyContent: 'flex-start'}}>
                        <button type="submit" className="btn btn-success">Enregistrer</button>
                        <Link to="/suppliers" className="btn btn-secondary">Annuler</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SupplierFormPage; 