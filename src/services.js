import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
});

export const api = {
    get: (endpoint) => axiosInstance.get(endpoint),
    post: (endpoint, body) => axiosInstance.post(endpoint, body)
};

export const getCep = (cep) => axios.get(`https://viacep.com.br/ws/${cep}/json`);
