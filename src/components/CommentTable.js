import React from 'react';
import './style/CommentDashboard.css'; 

const CommentTable = ({ comments }) => {
  return (
    <table className='comment-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Lawyer</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((comment) => (
          <tr key={comment.id}>
            <td>{comment.id}</td>
            <td>{comment.title}</td>
            <td>{comment.lawyer}</td>
            <td>{comment.status}</td>
            <td>
                <button>Check</button>
                <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommentTable;
