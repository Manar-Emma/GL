import React , {useState} from 'react';
import './stylea/FilterModal.css'; // Import your CSS file for styling
import wilayas from './wilayas'; 

const FilterWindow = ({ filters, onLanguageChange, onSpecialtyChange, onWilayaChange, onRatingChange, onApplyFilters, onCancelFilters }) => {
  const [selectedRating, setSelectedRating] = useState(filters.rating);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    onRatingChange(rating);
  };
  return (
    <div className={`filter-window`}>
      <div className='model'>
      <h2>Filter Window</h2>
      {/* Add checkboxes for languages */}
      <div>
        <p>Languages :</p>
        <label>
          <input type="checkbox" onChange={() => onLanguageChange('Arabic')} />
          Arabic
        </label>
        <label>
          <input type="checkbox" onChange={() => onLanguageChange('French')} />
          French
        </label>
        <label>
          <input type="checkbox" onChange={() => onLanguageChange('English')} />
          English
        </label>
      </div>
      <div>
  <label>
    REVIEW RATING:
    <div className='rate'>
      {[1, 2, 3, 4].map((rating) => (
        <label key={rating}>
          <input
            type="radio"
            name="rating"
            value={rating}
            checked={selectedRating === rating}
            onChange={() => handleRatingChange(rating)}
          />
          {Array.from({ length: rating }, (_, index) => (
            <span key={index} className='ratestars'>★</span>
          ))}
          +{rating}.0
        </label>
      ))}
    </div>
  </label>
</div>


      {/* Add select input for law specialities */}
      <div>
        <label>
          Specialty:
          <select onChange={(e) => onSpecialtyChange(e.target.value)}>
            <option value="">Select Specialty</option>
            <option value="Criminal law">Criminal Law</option>
            <option value="Family law">Family Law</option>
            <option value="business law">business Law</option>
            {/* Add more specialties dynamically */}
          </select>
        </label>
      </div>

      {/* Add select input for wilayas */}
      <div>
        <label>
          Wilaya:
          <select onChange={(e) => onWilayaChange(e.target.value)}>
            <option value="">Select Wilaya</option>
            {wilayas.map((wilaya, index) => (
              <option key={index} value={wilaya}>
                {wilaya}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Add Apply and Cancel buttons */}
      <div className='boutons'>
        <button className='applyb' onClick={onApplyFilters}>Apply</button>
        <button className='cancelb' onClick={onCancelFilters}>Cancel</button>
      </div>
     </div>
      
    </div>
  );
};

export default FilterWindow;

