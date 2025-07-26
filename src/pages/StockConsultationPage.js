// src/pages/StockConsultationPage.js
import React, { useState, useEffect } from 'react';
import ProductDetailsView from '../components/stock/ProductDetailsView';
import productService from '../services/productService';

const StockConsultationPage = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Charge le premier produit pour la démonstration
    productService.getProductById("U64").then(data => {
      setProduct(data);
    });
  }, []);

  return (
    <div>
      <h1 className="page-header">Consulter le stock</h1>
      <p>Affichage des détails pour un produit de démonstration.</p>
      <br/>
      <ProductDetailsView productData={product} />
    </div>
  );
};

export default StockConsultationPage; 