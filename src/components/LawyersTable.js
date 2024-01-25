import React from 'react';
import './style/LawyersTable.css'

const LawyerTable = ({ lawyers }) => {
  return (
    <div className='table-container'>
        <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Speciality</th>
            <th>Wilaya</th>
            <th>Status</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {lawyers.map((lawyer) => (
            <tr key={lawyer.id}>
                <td>{lawyer.id}</td>
                <td>{lawyer.name}</td>
                <td>{lawyer.speciality}</td>
                <td>{lawyer.wilaya}</td>
                <td>{lawyer.status}</td>
                <td>
                <button><a href='/Account'>Check</a></button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
};

export default LawyerTable;
