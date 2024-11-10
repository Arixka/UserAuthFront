
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const login = async (dataIn) => {
    try {
        const response = await axios.post('/login', dataIn);
        console.log('Login dataIn ', JSON.stringify(dataIn), ' response: ', JSON.stringify(response.data))
        return response.data;
    } catch (error) {
        return { error: 'Error in credentials or server issue' };
    }
};

export const register = async (dataIn) => {
    try {
        const response = await axios.post('/users', dataIn);
        console.log('Register dataIn ', JSON.stringify(dataIn), ' response: ',JSON.stringify(response.data))
        return response.data;
    } catch (error) {
        return { error: 'Error registering user' };
    }
};
