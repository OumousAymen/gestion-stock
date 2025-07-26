import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import supplierService from '../../services/supplierService';
import productService from '../../services/productService';
import stockEntryService from '../../services/stockEntryService';

const StockEntryFormPage = () => {
    const navigate = useNavigate();
    const [suppliers, setSuppliers] = useState([]);
    const [products, setProducts] = useState([]);
    const [supplierId, setSupplierId] = useState('');
    const [items, setItems] = useState([{ productId: '', quantity: 1, unitPrice: 0 }]);

    useEffect(() => {
        supplierService.getSuppliers().then(setSuppliers);
        productService.getProducts().then(setProducts);
    }, []);

    const handleItemChange = (index, event) => {
        const newItems = [...items];
        newItems[index][event.target.name] = event.target.value;
        setItems(newItems);
    };

    const handleAddItem = () => setItems([...items, { productId: '', quantity: 1, unitPrice: 0 }]);
    const handleRemoveItem = (index) => setItems(items.filter((_, i) => i !== index));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!supplierId || items.some(item => !item.productId)) {
            alert("Veuillez sélectionner un fournisseur et un produit pour chaque ligne.");
            return;
        }
        const entryData = { supplierId, items: items.map(item => ({...item, productName: products.find(p => p.id === item.productId)?.designation, quantity: parseInt(item.quantity, 10), unitPrice: parseFloat(item.unitPrice)})) };
        stockEntryService.addEntry(entryData).then(() => {
            alert("Entrée de stock enregistrée !");
            navigate('/stock-entries');
        });
    };

    return (
        <div>
            <h1 className="page-header">Nouvelle Entrée de Stock</h1>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group"><label htmlFor="supplierId">Fournisseur</label><select id="supplierId" value={supplierId} onChange={(e) => setSupplierId(e.target.value)} required><option value="">-- Choisir --</option>{suppliers.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select></div>
                    <div className="entry-form-items">
                        <label style={{fontWeight: 600, fontSize: 16, marginBottom: '15px', display: 'block'}}>Produits</label>
                        {items.map((item, index) => (
                            <div key={index} className="entry-form-item-row">
                                <div className="form-group">
                                    <select name="productId" value={item.productId} onChange={(e) => handleItemChange(index, e)} required>
                                        <option value="">-- Choisir un produit --</option>
                                        {products.map(p => <option key={p.id} value={p.id}>{p.designation}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`quantity-${index}`}>Quantité</label>
                                    <input type="number" id={`quantity-${index}`} name="quantity" value={item.quantity} onChange={(e) => handleItemChange(index, e)} min="1" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`unitPrice-${index}`}>Prix unitaire</label>
                                    <input type="number" id={`unitPrice-${index}`} name="unitPrice" value={item.unitPrice} onChange={(e) => handleItemChange(index, e)} step="0.01" min="0" required />
                                </div>
                                {items.length > 1 && <button type="button" onClick={() => handleRemoveItem(index)} className="remove-item-btn">×</button>}
                            </div>
                        ))}
                    </div>
                    <div className="page-controls" style={{ justifyContent: 'flex-start' }}>
                        <button type="button" onClick={handleAddItem} className="btn btn-secondary">Ajouter un produit</button>
                        <button type="submit" className="btn btn-success">Valider l'entrée</button>
                        <Link to="/stock-entries" className="btn btn-secondary" style={{marginLeft: 'auto'}}>Annuler</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StockEntryFormPage; 