// src/components/Welcome.js
import React from 'react';
import Dashboard from './Dashboard'; // Import the Dashboard component
import './Welcome.css'; // Optional: Import CSS for styling

const Welcome = () => {
    return (
        <div className="welcome-container">
            <div className="welcome-message">
                <h1>Welcome to the Student Performance Management System</h1>
                <p>Please find the dashboard below:</p>
            </div>
            <div className="dashboard-section">
                <Dashboard /> {/* Render the Dashboard component here */}
            </div>
        </div>
    );
};

export default Welcome;