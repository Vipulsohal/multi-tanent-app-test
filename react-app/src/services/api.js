import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Replace with your API URL

export const loginUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/users/login`, {
        email, password,
    }, {
        headers: {
            'Content-Type': 'application/json', // Make sure this is set correctly
        }
    });


    return response.data; // Returns the JWT token and user data
};

export const fetchProjects = async () => {

    //const response = await axios.get(`${API_URL}/projects`);
    return [{ "id": "1", "name": "project 1", "description": " project 1 description  " }, { "id": "2", "name": "project 2", "description": "project 2 description asdd " }];
};

export const fetchOrganizations = async () => {
    // const response = await axios.get(`${API_URL}/organizations`);
    return [{ "id": "1", "name": "project 1", "description": " project 1 description  " }, { "id": "2", "name": "project 2", "description": "project 2 description asdd " }];
};
