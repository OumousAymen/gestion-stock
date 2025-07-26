// src/services/stockEntryService.js

const mockEntries = [
    {
        id: 'BE-2025-001',
        date: '2025-02-15',
        supplierId: 'F001',
        items: [
            { productId: 'U64', productName: 'CLE USB64', quantity: 10, unitPrice: 85.50 },
            { productId: 'SCR22', productName: 'ECRAN 22 POUCES', quantity: 5, unitPrice: 1200.00 },
        ]
    },
    {
        id: 'BE-2025-002',
        date: '2025-03-01',
        supplierId: 'F002',
        items: [
            { productId: 'KB01', productName: 'CLAVIER MECANIQUE', quantity: 20, unitPrice: 420.00 },
        ]
    }
];

// Helper to calculate totals
const processEntries = (entries) => {
    return entries.map(entry => {
        const totalQuantity = entry.items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = entry.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
        return { ...entry, totalQuantity, totalPrice };
    });
};

const getEntries = () => new Promise(resolve => setTimeout(() => resolve(processEntries(mockEntries)), 500));

const getEntryById = (id) => new Promise(resolve => {
    const entry = mockEntries.find(e => e.id === id);
    setTimeout(() => resolve(entry ? processEntries([entry])[0] : null), 300);
});

const addEntry = (entryData) => new Promise(resolve => {
    const newEntry = {
        id: `BE-2025-${String(mockEntries.length + 1).padStart(3, '0')}`,
        date: new Date().toISOString().split('T')[0],
        ...entryData
    };
    mockEntries.push(newEntry);
    setTimeout(() => resolve(newEntry), 500);
});

const stockEntryService = {
    getEntries,
    getEntryById,
    addEntry
};

export default stockEntryService; 