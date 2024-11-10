
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const navigate = useNavigate();

    const login = async (username, password) => {
        try {
            const dataIn = { username, password };
            const response = await loginService(dataIn);
            if (response.token) {
                setToken(response.token);
                localStorage.setItem('token', response.token);
                navigate('/');
                return { success: true };
            } else {
                console.log('Login failed:', response);
                return { error: 'Login failed. Please check your credentials or try again later.' };
            }
        } catch (error) {
            return { error: 'Login failed. Please check your credentials or try again later.' };
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        navigate('/login');
    };

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
