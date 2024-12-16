import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Routes, Route, and Navigate for v6
import { AuthContext } from './context/AuthContext'; // Assuming AuthContext is properly set up
import Login from './components/Login';
import ProjectManagement from './components/ProjectsManagement';
import OrganizationManagement from './components/OrganizationsManagement';
import Header from './components/Header';
import Home from './components/Home'

const App = () => {
    const { user } = useContext(AuthContext);  // Get user from AuthContext

    return (
        <>
            <Header />  {/* Navigation header */}
            <div className="container">
                <Routes>
                    {/* If user is logged in, redirect to /projects */}
                    <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                    {/* If user is logged in, redirect to /projects */}
                    <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

                    {/* Route for /projects, only accessible if the user is logged in */}
                    <Route path="/projects" element={user ? <ProjectManagement /> : <Navigate to="/" />} />

                    {/* Route for /organizations, only accessible if the user is logged in */}
                    <Route path="/organizations" element={user && user.role == "admin" ? <OrganizationManagement /> : <Navigate to="/" />} />

                    {/* Example of role-based redirection */}
                    <Route path="/admin" element={user && user.role === 'admin' ? <OrganizationManagement /> : <Navigate to="/" />} />

                    {/* Catch-all for invalid routes */}
                    <Route path="*" element={<Navigate to="/" />} />  {/* Redirect to login page if route does not exist */}
                </Routes>
            </div>
        </ >
    );
};

export default App;
