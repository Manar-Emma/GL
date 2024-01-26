import { Link } from 'react-router-dom';
import './styleb/Profil.css';
import React, { useState } from "react";

const Profil = ({ lawyerData }) => {
    

    return (
        <div className="ProfilLawyer">
            <div class="clearfix">
            <div className="left-block">
            <img src={lawyerData.photo} alt="Photo de l'avocat" /></div>
            <div className="left-block">
            <h1>{lawyerData.nom}</h1>
            <p className="specialites"> {lawyerData.specialites[0]}</p>
            <p><img className="logo" src='../media/valise.png' alt="Logo valise" />  Licenced for {lawyerData.licence} years</p>
            <div>
                {[...Array(lawyerData.etoiles)].map((star, index) => (
                    <span key={index} className="etoile">★</span>
                ))}
            </div>
            <p className='tel'><img className="logo" src='../media/telephone.png' alt="Logo téléphone" />{lawyerData.numero}</p>
            <p className='tel'><img className="logo" src='../media/Global.png' alt="logo site" />{lawyerData.urlSite}</p>
            </div></div>
            <br></br>
            <Link to="/PageProfil/messages">
                <button className="button1">Messages</button>
            </Link>
            <span class="space-between"></span>
            <Link to="/Profil/appointments">
                <button className="button2">Appointment</button>
            </Link>

    
            <h1>About</h1>
            <p>{lawyerData.about}</p>
            <p>Spoken Languages {lawyerData.langues.join(', ')}</p>
            <h1>Adress and Contact</h1>
            <p className='tel'><img className="logo" src='../media/location.png' alt="Logo pointeur" />{lawyerData.adresse}</p>
            <p className='tel'><img className="logo" src='../media/telephone.png' alt="Logo téléphone" />{lawyerData.numero}</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102402.95565049788!2d7.505294223934695!3d36.672280207004704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f06d94452d8bc1%3A0x4978e283868338b7!2sA%C3%AFn%20Berda!5e0!3m2!1sfr!2sdz!4v1704049180512!5m2!1sfr!2sdz"
             width="600" 
             height="450" 
             style={{ border: "0" }} 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">
                
             </iframe>
             <h1>Practice Area</h1>
            <p className="specialites"> {lawyerData.specialites.join(', ')}</p>
            
        </div>
        
    );
}

export default Profil;