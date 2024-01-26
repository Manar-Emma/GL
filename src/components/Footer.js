import './style/Footer.css';
import React from 'react';


const Footer = () => {
  return (
    <footer>
        <div className='logo'>
            <img src='../media/logo.png' alt='logo'/> 
        </div>
        <div className='three'>
            <div className='one'>
                <h3>Quick Links</h3>
                <a href='#'>How It Works</a>
                <a href='#'>FAQ</a>
            </div>
            <div className='one'>
                <h3>Legal Information</h3>
                <a href='#'>Terms of Services</a>
                <a href='#'>Privacy Policy</a>
            </div>
            <div className='one'>
                <h3>Languages</h3>
                <button >English</button>
                <button >French</button>
            </div>
            <div className='one'>
           <h3>Social Media</h3>
            <div className='social'>
                
               <a href='#'> <img src='../media/facebook.png'></img></a>
                <a href='#'><img src='../media/Linkedin.png'></img></a>
                <a href='#'><img src='../media/instagram.png'></img></a>
                <a href='#'><img src='../media/X.png'></img></a>
            </div>

        </div>
        </div>

      <p>© 2023 Muhami Dz. All rights reserved.</p>
    </footer>
  );
};

export default Footer;