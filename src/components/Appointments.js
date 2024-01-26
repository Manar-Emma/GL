import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './style/Appointments.css';

const Appointments = ({ appointments }) => {
    const [appointmentsState, setAppointments] = useState(appointments);


    const handleDelete = (id) => {
        // Use the correct variable name in the filter method
        const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
        setAppointments(updatedAppointments);
    };

    return (
        <div className="Appointments">
            <h1>Appointments</h1>
            <table className="Table" border="0">
                <thead>
                    <tr>
                        <th className="borderBottom">Date</th>
                        <th className="borderBottom">Time</th>
                        <th className="borderBottom">Name</th>
                        <th className="borderBottom">Statues</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td className="borderBottom">{appointment.Date}</td>
                            <td className="borderBottom">{appointment.Time}</td>
                            <td className="borderBottom">{appointment.Name}</td>
                            <td className="borderBottom">{appointment.Statues}</td>
                            <td><Link to="/PageProfil/appointments/check"><button className="button1">Check</button></Link></td>
                            <td><button onClick={() => handleDelete(appointment.id)} className="button2">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Appointments;
