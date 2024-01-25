import React from 'react';
import { useState } from 'react';
import './style/LawyerAccount.css'; 

const LawyerAccount = ({ lawyerInfo }) => {
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='LawyerAccount'>
      <div className='acc'>
       <div className='accImg' onClick={togglePasswordVisibility}>
          <img src={lawyerInfo.image} alt={lawyerInfo.name} />
        </div>
        <div className='lawyerInfo'>
            <h2>Dr. {lawyerInfo.name} <span> - lawyer#<span>{lawyerInfo.id}</span></span></h2>
            <p>Speciality:<span> {lawyerInfo.speciality}</span></p>
            <p>Licensed for : <span>{lawyerInfo.years}</span> years</p>
            <p>Address: <span> {lawyerInfo.adress}</span></p>
            <p>Wilaya: <span> {lawyerInfo.wilaya}</span></p>
            <p>Languages: <span>{lawyerInfo.languages.join(', ')}</span></p>
            <p>Practise Area: <span>{lawyerInfo.practiseArea}</span></p>
            <p>Rating: <span> {lawyerInfo.rating}</span></p>
            <p>About: <span> {lawyerInfo.about}</span></p>
            <p>Password: <span>{showPassword ? lawyerInfo.password : '********'}</span></p>
            <p>status: <span> {lawyerInfo.status}</span> </p>
          

        </div>
      </div>
      <div className='RefConf'>
        <button>Confirm</button>
        <button>Refuse</button>
      </div>
      

      
    </div>
  );
};

export default LawyerAccount;
