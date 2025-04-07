// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin, registeredUser  }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Check if the entered credentials match the registered user
        if (registeredUser  && email === registeredUser .email && password === registeredUser .password) {
            onLogin({ email });
            alert('Login successful! Redirecting to welcome page.');
            navigate('/welcome'); // Redirect to the welcome page
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="button-container">
                    <button type="submit" className="login-button">Login</button>
                    <button type="button" className="register-button" onClick={() => navigate('/')}>Register</button>
                </div>
            </form>
        </div>
    );
};

export default Login;