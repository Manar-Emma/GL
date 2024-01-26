import './styleb/ProfilLawyer.css';
import React, { useState } from "react";
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from 'react-router-dom';


const ProfilLawyer = ({ lawyerData }) => {
    const navigate = useNavigate();

    const handleMessage = () => {
        // Naviguer vers la page d'édition lorsqu'on appuie sur le bouton "Edit"
        navigate('/SendMessage');
  };




    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState(8);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('popup-open');
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('popup-open');
    };
    const isWeekend = (date) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    };
    const isPastDate = (date) => {
        const today = new Date();
        return date < today;
    };

    const filterDates = (date) => {
        return !isWeekend(date) && !isPastDate(date);
    };

    return (
        <div className="ProfilLawyer">
            <div class="clearfix">
                <div className="left-block">
                    <img src={lawyerData.photo} alt="Photo de l'avocat" />
                </div>
                <div className="right-block">
                    <h1>{lawyerData.nom}</h1>
                    <p className="specialites"> {lawyerData.specialites[0]}</p>
                    <p className='tel'><img className="logo" src='../media/bag.png' alt="years" />  Licenced for {lawyerData.licence} years</p>
                    <div>
                        {[...Array(lawyerData.etoiles)].map((star, index) => (
                            <span key={index} className="etoile">★</span>
                        ))}
                    </div>
                    <p className='tel'><img className="logo" src='../media/telephone.png' alt="tel" />{lawyerData.numero}</p>
                    <p className='tel'><img className="logo" src='../media/Global.png' alt="site" />{lawyerData.urlSite}</p>
                </div>
            </div>
            <br></br>
            <button className="button1" onClick={handleMessage}>Message</button>
            <span className="space-between"></span>
            <button className="button2" onClick={openModal}>Appointment</button>
            
            
                <div className='fenetre'>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="Appointment Modal"
                    >
                        <div className="popup">
                            <div className="popup-header">
                                <h2>Appointment</h2>
                                <button onClick={closeModal}>X</button>
                            </div>
                            <div className="popup-content">
                                <p><label>Your Name:</label></p>
                                <p><input type="text" /></p>
                                <p><label>Your Email Adress:</label></p>
                                <p><input type="text" /></p>
                                <p><label>Your Phone Number:</label></p>
                                <p><input type="text" /></p>
                                <p><label>Select a date:</label></p>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    dateFormat="MMMM d, yyyy"
                                    placeholderText="Click to select a date"
                                    filterDate={filterDates}
                                />
                                <p><label>Select an hour:</label></p>
                                <div className="appointment-timeline">
                                    <div className="timeline-marker" style={{ left: `calc(${(selectedHour - 8) * (100 / 7)}%)` }}></div>
                                    <input
                                        type="range"
                                        min="8"
                                        max="15"
                                        step="1"
                                        className="timeline-slider"
                                        value={selectedHour}
                                        onChange={(e) => setSelectedHour(parseInt(e.target.value))}
                                    />
                                    <div className="selected-hour">{selectedHour}:00</div>
                                </div>
                            </div>
                            <div className="popup-footer">
                                <button onClick={closeModal}>Cancel</button>
                                <button>Send</button>
                            </div>
                        </div>
                    </Modal>
                </div>
            

            <h1>About</h1>
            <p>{lawyerData.about}</p>
            <p>Spoken Languages {lawyerData.langues.join(', ')}</p>
            <h1>Adress and Contact</h1>
            <p className='tel'><img className="logo" src='../media/location.png' alt="location" />{lawyerData.adresse}</p>
            <p className='tel'><img className="logo" src='../media/telephone.png' alt="tél" />{lawyerData.numero}</p>
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

export default ProfilLawyer;
