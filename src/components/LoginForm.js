
import React, { useState, useContext } from 'react';
import { TextField, Button, Alert, Container, Box } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await login(username, password);
        if (response.error) setError(response.error);
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
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Log In
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default LoginForm;
