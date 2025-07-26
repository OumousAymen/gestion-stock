import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productService from '../../services/productService';

const ProductDetailsView = ({ productData }) => {
    if (!productData) return <div className="card"><p>Chargement...</p></div>;
    const stockValue = (productData.qteEnStock * productData.prht).toFixed(2);

    return (
      <div className="product-details-grid">
        <div className="card">
            <div className="card-header">Informations Générales</div>
            <div className="detail-field"><label>Référence</label><span>{productData.ref}</span></div>
            <div className="detail-field"><label>Désignation</label><span>{productData.designation}</span></div>
            <div className="detail-field"><label>Famille</label><span>{productData.famille}</span></div>
            <div className="detail-field"><label>Fournisseur (Code)</label><span>{productData.codeFour || 'N/A'}</span></div>
        </div>
        <div className="card">
            <div className="card-header">Données de Stock</div>
            <div className="detail-field"><label>Quantité en Stock</label><span>{productData.qteEnStock}</span></div>
            <div className="detail-field"><label>Valeur du Stock</label><span>{stockValue} DH</span></div>
            <div className="detail-field"><label>Cumul Entrées</label><span>{productData.cumQteEntr}</span></div>
            <div className="detail-field"><label>Cumul Sorties</label><span>{productData.cumQteSort}</span></div>
        </div>
        <div className="card">
            <div className="card-header">Prix</div>
            <div className="detail-field"><label>Prix de revient HT</label><span>{productData.prht} DH</span></div>
            <div className="detail-field"><label>Prix de vente</label><span>{productData.pv || 'Non défini'}</span></div>
        </div>
      </div>
    );
};

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => { productService.getProductById(productId).then(setProduct); }, [productId]);

  return (
    <div>
        <div className="page-header">
            <h1>Détails du Produit</h1>
            <div className="page-controls">
                <Link to="/products" className="btn btn-secondary">← Retour</Link>
            </div>
        </div>
        <ProductDetailsView productData={product} />
    </div>
  );
};

export default ProductDetailPage; 