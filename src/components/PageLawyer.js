import React from 'react';
import NavBar from './Navbar';
import ProfilLawyer from './ProfilLawyer';
import Footer from './Footer';
import Reviews from './Reviews';

function PageLawyer({ lawyerData, reviews, showAddReviewButton }) {
  return (
    <div style={{ paddingTop: '50px' }}>
      <NavBar />
      <p style={{ margin: '50px 0', padding: '10px 0' }}>Home > Search > Lawyer</p>
      <ProfilLawyer lawyerData={lawyerData} />
      <Reviews showAddReviewButton={true} reviews={reviews} />
      <Footer />
    </div>
  );
}

export default PageLawyer;
