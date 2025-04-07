// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import './App.css'; // Import your CSS file for styling

const App = () => {
    const [registeredUser , setRegisteredUser ] = useState(null);
    const [loggedInUser , setLoggedInUser ] = useState(null);

    const handleRegister = (user) => {
        setRegisteredUser (user);
    };

    const handleLogin = (user) => {
        setLoggedInUser (user);
    };

    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Register onRegister={handleRegister} />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} registeredUser ={registeredUser } />} />
                    <Route path="/welcome" element={loggedInUser  ? <Welcome user={loggedInUser } /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;