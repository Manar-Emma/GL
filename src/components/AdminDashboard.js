

import React, { useState } from 'react';
import LawyerTable from './LawyersTable';
import LawyerFilterModal from './LawyerFilterModal';
import LawyersData from './LawyersData'; 
import './style/AccountsFilterModal.css'

const LawyerDashboard = () => {
    const [filteredLawyers, setFilteredLawyers] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [showNoResults, setShowNoResults] = useState(false);

    const [filters, setFilters] = useState({
      status: '',
      wilaya: '',
      speciality: '',
    });
  const handleApplyFilters = (filters) => {
    // Implement logic to filter lawyers based on selected filters
    const newFilteredLawyers = LawyersData.filter((lawyer) => {
      const statusMatch = filters.status === '' || lawyer.status === filters.status;
      const wilayaMatch = filters.wilaya === '' || lawyer.wilaya === filters.wilaya;
      const specialityMatch = filters.speciality === '' || lawyer.speciality === filters.speciality;
      return statusMatch && wilayaMatch && specialityMatch;
    });

    setFilteredLawyers(newFilteredLawyers);
    setShowFilter(false);

    const isWilayaValid = filters.wilaya === '' || LawyersData.some((lawyer) => lawyer.wilaya === filters.wilaya);
    const isSpecialtyValid = filters.speciality === '' || LawyersData.some((lawyer) => lawyer.speciality === filters.speciality);
    const isConfirmationValid = filters.status === '' || LawyersData.some((lawyer) => lawyer.status === filters.status);
  
    const newShowNoResults = !isConfirmationValid || !isWilayaValid || !isSpecialtyValid;
  
    console.log("showNoResults:", newShowNoResults);
  
    setShowNoResults(newShowNoResults);
  };

  const handleSpecialityChange = (speciality) => {
    // Update the filters state with the selected specialty , by the user
    setFilters({ ...filters, speciality });}

    const handleCancelFilters = () => {
        setFilters({

            specialty: '',
            wilaya: '',
            status: '', // Reset rating filter
          });
        // Reset filtered lawyers
        setFilteredLawyers([]);
        // Hide the filter window
        setShowFilter(false);

      
        // Show or hide "No Results" message
        setShowNoResults(false);


      };
      
      
      
    const showFilterButton = !showNoResults && filteredLawyers.length === 0;
    const showCancelButton = filteredLawyers.length > 0 || showNoResults;
  return (
    <div className='Dash'>
        {console.log("showNoResults before rendering:", showNoResults)}
      <div className='buttonsDiv'>
      {showFilterButton && (
        <button className='buttonD' onClick={() => setShowFilter(true)}>
          <img src='../media/filter.png' alt="Filter" />
          Filter
        </button>  )} 
        {showCancelButton && (
        <button className='buttonD' onClick={() => handleCancelFilters()}>
          <img src='../media/Cross.png' alt="Cancel" />
          Cancel
        </button>
      )}
      </div>
      {showNoResults && filteredLawyers.length === 0 && (
        <p>No lawyer with specified filters.</p>
        )}

      {/* Display filtered lawyers in a table */}
      <LawyerTable lawyers={filteredLawyers.length > 0 ? filteredLawyers : LawyersData} />

      {/* Filter window */}
      {showFilter && (
        <LawyerFilterModal
          onApplyFilters={handleApplyFilters}
          onCancelFilters={handleCancelFilters}
          onSpecialityChange={handleSpecialityChange}
        />
      )}
    </div>
  );
};

export default LawyerDashboard;
