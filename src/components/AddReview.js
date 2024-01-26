
import React, { useState } from 'react';
import StarRating from './StarRating';
import './style/AddReview.css';


const AddReview = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };
  const handleCancel = () => {
      };
    
      const handleConfirm = () => {
      };

  return (
    <div className="add-review">
      <div>
        <label>
          <h4><span className="required">*</span>Your First Name:</h4>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
          />
        </label>
      </div>
      <div>
        <label>
        <h4><span className="required">*</span>Your Email Address:</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </label>
      </div>
      <div>
        <p>MuhamiDz will only use your email to contact you about your review. It will never be shared publicly.</p>
        <p>
        <h4><span className="required">*</span>Select a rating for your lawyer:</h4>
        </p>
        <StarRating rating={rating} onRatingClick={handleRatingClick} />
      </div>
      <div>
        <label>
          <h4><span className="required">*</span>Add a title</h4>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
          />
        </label>
      </div>
      <div>
        <label>
          <h4><span className="required">*</span>Add a title</h4>
          <textarea></textarea>
        </label>
      </div>
      <button className="button2" onClick={handleCancel}>Cancel</button>
    <span class="space-between"></span>
    <button className="button1" onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default AddReview;
