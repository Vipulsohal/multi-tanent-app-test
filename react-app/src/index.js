import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <AuthProvider>

            <App />


        </AuthProvider>
    </Router>,
    document.getElementById('root')
);
