import { Link } from 'react-router-dom';
import './style/ProfilLawyer.css';
import React, { useState } from "react";


const ProfilLawyer = ({ lawyerData }) => {


    return (
        <div className="ProfilLawyer">
            <div class="clearfix">
            <div className="left-block">
            <img src={lawyerData.photo} alt="Photo de l'avocat" /></div>
            <div className="right-block">
            <h1>{lawyerData.nom}</h1>
            <p className="specialites"> {lawyerData.specialites[0]}</p>
            <p><img className="logo" src='../media/valise.png' alt="Logo valise" />  Licenced for {lawyerData.licence} years</p>
            <div>
                {[...Array(lawyerData.etoiles)].map((star, index) => (
                    <span key={index} className="etoile">★</span>
                ))}
            </div>
            <p><img className="logo" src='../media/telephone.png' alt="Logo téléphone" />{lawyerData.numero}</p>
            <p><img className="logo" src='../media/site.png' alt="logo site" />{lawyerData.urlSite}</p>
            </div></div>
            <br></br>
            <Link to="/PageProfil/messages">
                <button className="button1">Messages</button>
            </Link>
            <span class="space-between"></span>
            <Link to="/PageProfil/appointments">
                <button className="button2">Appointment</button>
            </Link>

            
    
            
            <p style={{ color: 'black' }}>____________________________________________________________________________________________________________________________________________</p>

            
            
            
            
            
        </div>
        
    );
}

export default ProfilLawyer;