// src/components/layout/MainLayout.js
import React from 'react';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 