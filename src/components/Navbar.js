import './style/Navbar.css';
import React from 'react';

const NavBar = () => {
  return (
    <nav>
        <div className="logo">
            <img src='../media/logo.png' alt="Profile" />
        </div>

        <div className="language-circles">
            <button>
                <img src='../media/United Kingdom.png' alt="Profile" className="circle" />
            </button>
            <button>
                <img src='../media/Clipperton Island.png' alt="Profile" className="circle" />
            </button>

        </div>

    </nav>
  );
};

export default NavBar;

