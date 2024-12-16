// src/components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <header style={styles.header}>
            <div style={styles.nav}>
                <Link to="/" style={styles.link}>
                    Home
                </Link>
                {user && (
                    <>
                        <Link to="/projects" style={styles.link}>
                            Projects
                        </Link>
                        {user.role === 'admin' &&
                            <Link to="/organizations" style={styles.link}>
                                Organizations
                            </Link>
                        }
                    </>
                )}
            </div>

            <div style={styles.auth}>
                {user ? (
                    <>
                        <span style={styles.user}>{user.email}</span>
                        <button onClick={logout} style={styles.button}>
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/" style={styles.link}>
                        Login
                    </Link>
                )}
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: '10px 20px',
        color: '#fff',
    },
    nav: {
        display: 'flex',
        gap: '15px',
    },
    auth: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    user: {
        marginRight: '10px',
    },
    button: {
        padding: '5px 10px',
        backgroundColor: '#ff5722',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
    },
};

export default Header;
