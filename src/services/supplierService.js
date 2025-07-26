// src/services/supplierService.js

const mockSuppliers = [
    { id: 'F001', code: 'F001', name: 'ATLAS FOURNITURES', lastOrderDate: '2025-02-15' },
    { id: 'F002', code: 'F002', name: 'BUREAU MODERNE', lastOrderDate: '2025-03-01' },
    { id: 'F003', code: 'F003', name: 'INFO-DISTRIBUTION', lastOrderDate: '2025-01-20' },
];

const getSuppliers = () => new Promise(resolve => setTimeout(() => resolve([...mockSuppliers]), 300));

const getSupplierById = (id) => new Promise(resolve => {
    const supplier = mockSuppliers.find(s => s.id === id);
    setTimeout(() => resolve(supplier), 200);
});

const addSupplier = (supplierData) => new Promise(resolve => {
    const newSupplier = {
        id: `F${String(mockSuppliers.length + 1).padStart(3, '0')}`,
        ...supplierData,
        lastOrderDate: new Date().toISOString().split('T')[0] // Set current date
    };
    mockSuppliers.push(newSupplier);
    setTimeout(() => resolve(newSupplier), 500);
});

const supplierService = {
    getSuppliers,
    getSupplierById,
    addSupplier
};

export default supplierService; 