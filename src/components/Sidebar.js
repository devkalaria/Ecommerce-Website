import React from 'react';
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4 className="text-white p-3">E-commerce</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active text-white" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="./Dashboard">Discover</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Checkout</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="Chatbot">Chatbot</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

