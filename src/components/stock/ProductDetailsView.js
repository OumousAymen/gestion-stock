// src/components/stock/ProductDetailsView.js
import React from 'react';

const ProductDetailsView = ({ productData }) => {
  // Affiche un message de chargement ou d'erreur si aucune donnée n'est fournie
  if (!productData) {
    return <div>Chargement des détails du produit ou produit non trouvé...</div>;
  }
  return (
    <div className="product-details-container">
      <div className="details-header">
        <span>{productData.s25 || "N/A"}</span>
        <span>{productData.dateSysteme || "N/A"}</span>
      </div>
      <div className="details-title">CONSULTATION</div>
      
      <div className="details-grid">
        <div className="detail-item"><label>Réf:</label><span>{productData.ref}</span></div>
        <div className="detail-item"><label>Désig.:</label><span>{productData.designation}</span></div>
        <div className="detail-item" style={{gridColumn: 'span 2'}}><label>Dt.Sort:</label><span>{productData.dateSortie || "N/A"}</span></div>
        <div className="detail-item"><label>Famille:</label><span>{productData.famille}</span></div>
        <div className="detail-item"><label>Code Four:</label><span>{productData.codeFour || "N/A"}</span></div>
        <div className="detail-item"><label>Ss Fam:</label><span>{productData.ssFam || "N/A"}</span></div>
        <div className="detail-item"><label>Rayon:</label><span>{productData.rayon || "N/A"}</span></div>
        <div className="detail-item"><label>Unit:</label><span>{productData.unit || "N/A"}</span></div>
        <div className="detail-item"><label>ANTI ATLAS</label><span>{productData.antiAtlas || ""}</span></div>
      </div>

      <div className="details-section details-grid">
        <div className="detail-item"><label>Stock Initial:</label><span>{productData.stockInitial || "0.00"}</span></div>
        <div className="detail-item"><label>P.R.HT:</label><span>{productData.prht || "0.00"}</span></div>
        <div className="detail-item"><label>P.A.:</label><span>{productData.pa || "0.00"}</span></div>
        <div className="detail-item"><label>Val. Initial:</label><span>{productData.valInitial || "0.00"}</span></div>
        <div className="detail-item"><label>P.Dev:</label><span>{productData.pDev || "0.00"}</span></div>
        <div className="detail-item"><label>P.V.:</label><span>{productData.pv || "0.00"}</span></div>
        <div className="detail-item"><label>Quantité Min:</label><span>{productData.quantiteMin || "0.00"}</span></div>
        <div className="detail-item"><label>P.M.P:</label><span>{productData.pmp || ":"}</span></div>
        <div className="detail-item"><label>Cmdes Cli.:</label><span>{productData.cmdesCli || "0.00"}</span></div>
        <div className="detail-item"><label>Quant à Cder:</label><span>{productData.quantACder || "0.00"}</span></div>
        <div className="detail-item"><label>En Arrivage:</label><span>{productData.enArrivage || "0.00"}</span></div>
      </div>

      <div className="details-section details-grid">
        <div className="detail-item"><label>Cum Qte Entr:</label><span>{productData.cumQteEntr || "0.00"}</span></div>
        <div className="detail-item"><label>Cum Qte Sort:</label><span>{productData.cumQteSort || "0.00"}</span></div>
        <div className="detail-item"><label>QTE en STOCK:</label><span>{productData.qteEnStock || "0.00"}</span></div>
        <div className="detail-item"><label>Code TVA:</label><span>{productData.codeTVA || "N/A"}</span></div>
        <div className="detail-item"><label>Cum Val Entr:</label><span>{productData.cumValEntr || "0.00"}</span></div>
        <div className="detail-item"><label>Cum Val Sort:</label><span>{productData.cumValSort || "0.00"}</span></div>
        <div className="detail-item"><label>Valeur STOCK:</label><span>{productData.valeurStock || ":"}</span></div>
        <div className="detail-item"><label>Equivalence:</label><span>{productData.equivalence || ":"}</span></div>
        <div className="detail-item" style={{gridColumn: 'span 2'}}><label>Noumcl.Dn.:</label><span>{productData.noumclDn || "N/A"}</span></div>
        <div className="detail-item" style={{gridColumn: 'span 2'}}><label>Tax Incl. O/N:</label><span>{productData.taxIncl || "N"}</span></div>
        <div className="detail-item" style={{gridColumn: 'span 2'}}><label>Arrivages</label><span>{productData.arrivages || "N/A"}</span></div>
      </div>

      <div className="details-footer">
        <div className="footer-actions">
            <div className="detail-item"><label>Observ.:</label><span>{productData.observ || ":"}</span></div>
            <div className="detail-item"><label>Tarif 2:</label><span>{productData.tarif2 || "0.00"}</span></div>
            <div className="detail-item"><label>Tarif 3:</label><span>{productData.tarif3 || "0.00"}</span></div>
            <br/>
            <span>Créat</span>
            <span style={{backgroundColor: '#fff', color: '#000', padding: '2px 5px'}}>Consult</span>
            <span>Modif</span>
            <span>Suppres</span>
        </div>
        <div className="footer-message">
            tapez une touche...
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsView; 