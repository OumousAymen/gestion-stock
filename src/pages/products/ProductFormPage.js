import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ProductFormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ ref: '', designation: '', famille: '', ssFam: '', qteEnStock: 0, prht: 0, tva: 20 });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving product:", formData);
    alert('Produit sauvegardé (simulation)');
    navigate('/products');
  };

  const priceAfterTax = (parseFloat(formData.prht || 0) * (1 + parseFloat(formData.tva || 0) / 100)).toFixed(2);

  return (
    <div>
      <h1 className="page-header">Ajouter / Modifier un Produit</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group"><label htmlFor="ref">Référence</label><input type="text" id="ref" name="ref" onChange={handleChange} required /></div>
          <div className="form-group"><label htmlFor="designation">Désignation</label><input type="text" id="designation" name="designation" onChange={handleChange} required /></div>
          <div className="form-group"><label htmlFor="famille">Famille</label><input type="text" id="famille" name="famille" onChange={handleChange} /></div>
          <div className="form-group"><label htmlFor="ssFam">Sous-famille</label><input type="text" id="ssFam" name="ssFam" onChange={handleChange} /></div>
          <div className="form-group"><label htmlFor="qteEnStock">Quantité Initiale</label><input type="number" id="qteEnStock" name="qteEnStock" onChange={handleChange} /></div>
          <div className="form-group"><label htmlFor="prht">Prix de Revient HT</label><input type="number" step="0.01" id="prht" name="prht" onChange={handleChange} /></div>
          <div className="form-group"><label htmlFor="tva">TVA (%)</label><input type="number" step="0.01" id="tva" name="tva" value={formData.tva} onChange={handleChange} /></div>
          <div className="form-group"><label>Prix TTC</label><input type="text" value={priceAfterTax + ' DH'} readOnly tabIndex={-1} /></div>
          <div className="page-controls" style={{justifyContent: 'flex-start'}}>
            <button type="submit" className="btn btn-success">Enregistrer</button>
            <Link to="/products" className="btn btn-secondary">Annuler</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFormPage; 