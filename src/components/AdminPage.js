import React, { useState } from 'react';
import './style/AdminPage.css'; // Import your CSS file for styling

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
          <img src='../media/logo.png'alt="Logo" />
        </div>
        <div className="admin-info">
          <p>Admin Name</p>
        </div>
      </div>

      {/* Side Navbar */}
      <nav className="side-navbar">
        <div className="navbar-links">
          <a href="/HomeAdmin" onClick={closeNavbar}>
            Home
          </a>
          <a href="/AccountsDashbord" onClick={closeNavbar}>
            Manage Accounts
          </a>
          <a href="CommentsDashbord" onClick={closeNavbar}>
            Manage Comments
          </a>
          <a href="/LogOut" onClick={closeNavbar}>
            Logout
          </a>
        </div>
        <button className="close-button" onClick={closeNavbar}>
          &times;
        </button>
      </nav>

      {/* Content */}
      <div className="content-container">
        {/* Flex Container 1 */}
        <div className="flex-container">
          {/* Your content for Flex Container 1 */}
        </div>

        {/* Flex Container 2 */}
        <div className="flex-container">
          {/* Your content for Flex Container 2 */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
