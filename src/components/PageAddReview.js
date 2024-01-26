import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './Navbar';
import ProfilLawyer from './ProfilLawyer';
import AddReview from './AddReview';
import Footer from './Footer';


function PageAddReview({review, lawyerData}) {
  return (
    <div style={{ paddingTop: '50px' }}>
      <NavBar />
      <ProfilLawyer lawyerData={lawyerData} />
      <p style={{ margin: '30px 0 0 50px', padding: '10px 0' }} >
        <Link to="/PageLawyer">
            Back to profil
        </Link> 
          </p>
      <AddReview review={review} />
      <Footer />
    </div>
  );
}

export default PageAddReview;