// src/services/productService.js

// Mock data based on the image and for the list
const mockProducts = [
  {
    id: "U64",
    ref: "U64",
    designation: "CLE USB64",
    dateSortie: "11/02/2025",
    s25: "S25 AL OMRANE - SOUSS MASSA",
    dateSysteme: "03/04/2025",
    famille: "BUREAUTIQUE",
    codeFour: "12",
    ssFam: "CL2 USB 64",
    rayon: ":",
    unit: ":",
    antiAtlas: "",
    stockInitial: "30.00",
    valInitial: "2 617.86",
    quantiteMin: "0.00",
    quantACder: "0.00",
    cumQteEntr: "4.00",
    cumQteSort: "26.00",
    qteEnStock: "20.00",
    codeTVA: "1",
    prht: "100.00",
    pDev: "87.26",
    pmp: ":",
    enArrivage: "0.00",
    pa: "100.00",
    pv: "0.00",
    cmdesCli: "0.00",
    cumValEntr: "480.00",
    cumValSort: "2 268.81",
    valeurStock: ":",
    equivalence: ":",
    noumclDn: "1",
    taxIncl: "O/N: N",
    arrivages: "Inventair",
    observ: ":",
    tarif2: "0.00",
    tarif3: "0.00",
  },
  {
    id: "SCR22",
    ref: "SCR22",
    designation: "ECRAN 22 POUCES",
    famille: "INFORMATIQUE",
    qteEnStock: "15.00",
    prht: "1250.00",
    // ... add other fields as needed for detail view
  },
  {
    id: "KB01",
    ref: "KB01",
    designation: "CLAVIER MECANIQUE",
    famille: "INFORMATIQUE",
    qteEnStock: "5.00", // Low stock for alert
    prht: "450.00",
    // ... add other fields as needed for detail view
  },
];

// Simulates fetching all products
const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500); // Simulate network delay
  });
};

// Simulates fetching a single product by its ID
const getProductById = (id) => {
  return new Promise((resolve) => {
    const product = mockProducts.find((p) => p.id === id);
    setTimeout(() => {
      resolve(product);
    }, 300);
  });
};

const productService = {
  getProducts,
  getProductById,
};

export default productService; 