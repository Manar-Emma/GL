import React, { useState } from 'react';
import CommentTable from './CommentTable';
import CommentsData from './CommentsData'; 
import './style/CommentDashboard.css'; 

const CommentDashboard = () => {
  const [filteredComments, setFilteredComments] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedStatus(selectedValue);


    const newFilteredComments = CommentsData.filter((comment) => {
      return comment.status.toLowerCase() === selectedValue.toLowerCase();
    });

    setFilteredComments(newFilteredComments);
  };

  return (
    <div className='CommentDash'>
      <div className='selectDiv'>
        <h1>Reviews Dashboard</h1>
       
        <div className='selectImg'>
            <img src='../media/filter.png' />
            <select value={selectedStatus} onChange={handleStatusChange}>
            <option value=''>All Status</option>
            <option value='Pending'>Pending</option>
            <option value='Added'>Added</option>
            
            </select>
        </div>
      </div>

      <div className='tableContainer'>
        <CommentTable comments={filteredComments.length > 0 ? filteredComments : CommentsData} />
      </div>
    </div>
  );
};

export default CommentDashboard;
