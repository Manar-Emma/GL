import React from "react";
import './style/AdminChoose.css'
const AdminChoose = () => {
    return(
        <div className="AdminChoose">
            <h1>Admin Dashboard Overview</h1>
            <div className="twodiv">
                <div className="onediv">
                    <img src="../media/lawMizen.png"/>
                    <h3>Lawyers Accounts</h3>
                    <button type="button"><a href="/AdminDashbord">Choose</a></button>
                </div>
                <div className="onediv">
                    <img src="../media/loupe.png"/>
                    <h3>Comments</h3>
                    <button type="button"><a href="CommentsDashbord">Choose</a></button>
                </div>
            </div>

        </div>


    );
    };

export default AdminChoose;
  
    