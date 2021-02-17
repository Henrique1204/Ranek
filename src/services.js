import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://ranekapi.teste/wp-json/api'
});

axiosInstance.interceptors.request.use(
    function (config) {
        const token = window.localStorage.token;
        if (token) config.headers.Authorization = token;
        return config;
    }, function (erro) {
        return Promise.reject(erro);
    }
);

export const api = {
    get: (endpoint) => axiosInstance.get(endpoint),
    post: (endpoint, body) => axiosInstance.post(endpoint, body),
    put: (endpoint, body) => axiosInstance.put(endpoint, body),
    delete: (endpoint) => axiosInstance.delete(endpoint),
    login: (body) => {
        return axios.post('http://ranekapi.teste/wp-json/jwt-auth/v1/token', body);
    },
    validarToken: () => axios.post('http://ranekapi.teste/wp-json/jwt-auth/v1/validate')
};

export const getCep = (cep) => axios.get(`https://viacep.com.br/ws/${cep}/json`);
