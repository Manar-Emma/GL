import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './Navbar';
import SmallProfilLawyer from './SmallProfilLawyer';
import CheckAppointment from './CheckAppointment';
import Footer from './Footer';


function PageCheckAppoinyment({appointment, lawyerData}) {
  return (
    <div style={{ paddingTop: '50px' }}>
      <NavBar />
      <p style={{ margin: '50px 0', padding: '10px 0' }}>Home > Profil > Appointments</p>
      <SmallProfilLawyer lawyerData={lawyerData} />
      <CheckAppointment appointment={appointment}/>
      <Footer />
    </div>
  );
}

export default PageCheckAppoinyment;