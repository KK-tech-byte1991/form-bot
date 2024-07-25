import axios from 'axios';
import { BASE_URL } from './baseUrl';
import { toast } from 'sonner';

let token = localStorage.getItem("authToken")
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    },
});
axiosInstance.interceptors.request.use(
    config => {
        console.log('Request made with ', config);
        return config;
    },
    error => {
        console.error('Request error: ', error);
        return Promise.reject(error);
    }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            toast.error(error.response.data.msg)

            console.error('Response error data: ', error.response.data);
            console.error('Response error status: ', error.response.status);
        } else if (error.request) {
            console.error('Request made but no response received: ', error.request);
        } else {
            console.error('Error message: ', error.message);
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;
