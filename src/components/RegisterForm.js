import React, { useState } from 'react';
import { TextField, Button, Alert, Container, Box } from '@mui/material';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        
        const response = await register({ username, password });
        if (response.error) {
            setError(response.error);
        } else {
            setSuccess('Registration successful! Redirecting to login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box mt={8}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                    />
                    {error && <Alert severity="error" style={{ marginBottom: '1em' }}>{error}</Alert>}
                    {success && <Alert severity="success" style={{ marginBottom: '1em' }}>{success}</Alert>}
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Register
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default RegisterForm;
