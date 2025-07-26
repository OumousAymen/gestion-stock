// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import authService from './services/authService';
import MainLayout from './components/layout/MainLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import StockConsultationPage from './pages/StockConsultationPage';
import ProductManagementPage from './pages/ProductManagementPage';
import StockEntryPage from './pages/StockEntryPage';
import StockExitPage from './pages/StockExitPage';
import SupplierManagementPage from './pages/SupplierManagementPage';
import GlobalStatsPage from './pages/GlobalStatsPage';
import AlertsPage from './pages/AlertsPage';
import ProductsListPage from './pages/products/ProductsListPage';
import ProductDetailPage from './pages/products/ProductDetailPage';
import ProductFormPage from './pages/products/ProductFormPage';
import StockEntriesListPage from './pages/stock-entries/StockEntriesListPage';
import StockEntryDetailPage from './pages/stock-entries/StockEntryDetailPage';
import StockEntryFormPage from './pages/stock-entries/StockEntryFormPage';
import SuppliersListPage from './pages/suppliers/SuppliersListPage';
import SupplierFormPage from './pages/suppliers/SupplierFormPage';
import './App.css';

// A wrapper for protected routes
const PrivateRoute = ({ children }) => {
  return authService.isAuthenticated() ? <MainLayout>{children}</MainLayout> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path="/stock-consultation" element={<PrivateRoute><StockConsultationPage /></PrivateRoute>} />
        <Route path="/product-management" element={<PrivateRoute><ProductManagementPage /></PrivateRoute>} />
        <Route path="/stock-entry" element={<PrivateRoute><StockEntryPage /></PrivateRoute>} />
        <Route path="/stock-exit" element={<PrivateRoute><StockExitPage /></PrivateRoute>} />
        <Route path="/supplier-management" element={<PrivateRoute><SupplierManagementPage /></PrivateRoute>} />
        <Route path="/global-stats" element={<PrivateRoute><GlobalStatsPage /></PrivateRoute>} />
        <Route path="/alerts" element={<PrivateRoute><AlertsPage /></PrivateRoute>} />
        {/* Added protected routes for sidebar navigation */}
        <Route path="/products" element={<PrivateRoute><ProductsListPage /></PrivateRoute>} />
        <Route path="/products/new" element={<PrivateRoute><ProductFormPage /></PrivateRoute>} />
        <Route path="/products/:productId" element={<PrivateRoute><ProductDetailPage /></PrivateRoute>} />
        <Route path="/stock-entries" element={<PrivateRoute><StockEntriesListPage /></PrivateRoute>} />
        <Route path="/stock-entries/new" element={<PrivateRoute><StockEntryFormPage /></PrivateRoute>} />
        <Route path="/stock-entries/:entryId" element={<PrivateRoute><StockEntryDetailPage /></PrivateRoute>} />
        <Route path="/suppliers" element={<PrivateRoute><SuppliersListPage /></PrivateRoute>} />
        <Route path="/suppliers/new" element={<PrivateRoute><SupplierFormPage /></PrivateRoute>} />

        {/* Default route */}
        <Route path="*" element={<Navigate to={authService.isAuthenticated() ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
