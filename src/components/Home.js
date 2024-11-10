
import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '10vh' }}>
            <Typography variant="h4" gutterBottom>Welcome to User Authentication</Typography>
            <Box mt={4}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/login')}
                    style={{ marginRight: '1em' }}
                >
                    Login
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate('/register')}
                >
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
