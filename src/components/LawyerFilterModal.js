

import React, { useState } from 'react';
import wilayas from './wilayas';
import './style/AccountsFilterModal.css'

const LawyerFilterModal = ({ onApplyFilters, onCancelFilters }) => {
  const [filters, setFilters] = useState({
    status: '',
    wilaya: '',
    speciality: '',
  });

  const handleApply = () => {
    onApplyFilters(filters);
  };

  const handleCancel = () => {
    onCancelFilters();
  };

  return (
    <div className="filter-window">
     <div className='model'>
      <h2>Filter Lawyers</h2>
      <div>
        <label>Status:</label>
        <select onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
        </select>
      </div>
      
      <div>
        <label>
          Wilaya:
          <select onChange={(e) => setFilters({ ...filters, wilaya: e.target.value })}>
            <option value="">Select Wilaya</option>
            {wilayas.map((wilaya, index) => (
              <option key={index} value={wilaya}>
                {wilaya}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Specialty:
          <select onChange={(e) => setFilters({ ...filters, speciality: e.target.value })}>
            <option value="">All Specialities</option>
            <option value='Criminal Law'>Criminal Law</option>
            <option value='Family Law'>Family Law</option>
            <option value='Business Law'>Business Law</option>
            
          </select>
        </label>
      </div>
      <div className="buttons">
        <button className='applyb' onClick={handleApply}>Apply</button>
        <button  className="cancelb" onClick={handleCancel}>Cancel</button>
      </div>
      </div>
    </div>
  );
};

export default LawyerFilterModal;
