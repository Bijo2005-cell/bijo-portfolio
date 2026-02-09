import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';
const API_URL = `${BACKEND_URL}/api`;

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchProfile = async () => {
    const response = await api.get('/profile');
    return response.data;
};

export const fetchProjects = async () => {
    const response = await api.get('/projects');
    return response.data;
};

export const fetchExperience = async () => {
    const response = await api.get('/experience');
    return response.data;
};

export const fetchSkills = async () => {
    const response = await api.get('/skills');
    return response.data;
};

export const fetchEducation = async () => {
    const response = await api.get('/education');
    return response.data;
};

export const sendMessage = async (data) => {
    const response = await api.post('/contact', data);
    return response.data;
};
