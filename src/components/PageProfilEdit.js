import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import NavBar from './Navbar';
import ProfilEdit from './ProfilEdit';
import Footer from './Footer';
import Reviews from './Reviews';

function PageProfilEdit({ lawyerData, reviews, showAddReviewButton }) {
    const navigate = useNavigate();

  const handleSaveClick = () => {
    // Effectuer des actions de sauvegarde si nécessaire

    // Naviguer vers la page Profil après avoir enregistré
    navigate('/PageProfil');
  };
  return (
    <div style={{ paddingTop: '50px' }}>
      <NavBar />
      <p style={{ margin: '50px 0', padding: '10px 0' }}>Home > Profil</p>
      <div style={{ position: 'relative' }}>
        <ProfilEdit lawyerData={lawyerData} />
        <button className="buttonEdit" onClick={handleSaveClick}>Save</button>
      </div>
      <Reviews showAddReviewButton={false} reviews={reviews} />
      <Footer />
    </div>
  );
}

export default PageProfilEdit;
