import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

// create axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// GET
export const getData = async (endpoint) => {
    try {
        console.log("======")
        console.log(endpoint)
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.log('error getData', error);
        console.error('Error fetching data:', error);
        throw error;
    }
};

// POST
export const postData = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

// PUT (UPDATE)
export const updateData = async (endpoint, data) => {
    try {
        const response = await api.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};

// DELETE
export const deleteData = async (endpoint) => {
    try {
        const response = await api.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};
