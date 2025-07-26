import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import productService from '../../services/productService';

const ProductsListPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    productService.getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <div className="page-header">
        <h1>Produits</h1>
        <div className="page-controls">
          <Link to="/products/new" className="btn btn-primary">Ajouter un produit</Link>
        </div>
      </div>
      <div className="card">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Référence</th>
              <th>Désignation</th>
              <th>Famille</th>
              <th>Sous-famille</th>
              <th>Qté en Stock</th>
              <th>Prix HT</th>
              <th>TVA (%)</th>
              <th>Prix TTC</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => {
              const tva = product.tva !== undefined ? parseFloat(product.tva) : 20;
              const prht = parseFloat(product.prht);
              const ttc = (prht * (1 + tva / 100)).toFixed(2);
              return (
                <tr key={product.id} className="clickable-row" onClick={() => navigate(`/products/${product.id}`)}>
                  <td>{product.ref}</td>
                  <td>{product.designation}</td>
                  <td>{product.famille}</td>
                  <td>{product.ssFam || ''}</td>
                  <td>{product.qteEnStock}</td>
                  <td>{product.prht} DH</td>
                  <td>{tva}</td>
                  <td>{ttc} DH</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsListPage; 