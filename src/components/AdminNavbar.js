import './style/AdminNavbar.css';
import React, { useState } from 'react'; 
const AdminPage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className={`admin-page ${isNavbarOpen ? 'navbar-open' : ''}`}>
      {/* Navbar */}
      <div className="navbar">
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span>&#9776;</span>
        </button>
        <div className="logo-container">
          <img src='../media/logo.png' alt="" />
        </div>
        <div className="admin-info">
          <p>Admin Name</p>
        </div>
      </div>

      {/* Side Navbar */}
      <nav className="side-navbar">
        <div className="navbar-links">
          <a href="#" onClick={closeNavbar}>
            Home
          </a>
          <a href="#" onClick={closeNavbar}>
            Manage Accounts
          </a>
          <a href="#" onClick={closeNavbar}>
            Manage Comments
          </a>
          <a href="#" onClick={closeNavbar}>
            Logout
          </a>
        </div>
        <button className="close-button" onClick={closeNavbar}>
          &times;
        </button>
      </nav>

      
    </div>
  );
};

export default AdminPage;