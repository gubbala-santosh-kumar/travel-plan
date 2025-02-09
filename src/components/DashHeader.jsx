import React from 'react';
import './DashHeader.css';
import { useNavigate } from 'react-router-dom';

function DashHeader() {
    const navigate = useNavigate();
    return (
        <div className="DashHeaderWrapper">
            <div className="DashHeaderLogoWrapper">
                <h1>Dashboard</h1>
            </div>
            <div className="DashHeaderListWrapper">
                <ul>
                    <li><button onClick={()=> navigate("/")}>Home</button></li>
                    <li><button onClick={() => navigate("/SignUp")}>Sign Up</button></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">More</a></li>
                </ul>
            </div>
        </div>
    );
}

export default DashHeader;
