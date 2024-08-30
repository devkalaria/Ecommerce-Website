import React from 'react';
import '../css/Dashboard.css';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="content">
        <h2>Product</h2>
        <ProductList />
        <br></br><br></br>
        <h2>Best Product</h2>
        <ProductList />
        
      </div>
    </div>
  );
};

export default Dashboard;


