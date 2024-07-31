import axios from 'axios';
import { BASE_URL } from './baseUrl';
import { toast } from 'sonner';


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});
// const axiosInstance = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': token
//     },
// });
axiosInstance.interceptors.request.use(
    config => {
        // const token = sessionStorage.getItem('token');
        const token = localStorage.getItem("authToken")
        if (token) {
            config.headers['Authorization'] = token;
        }
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
        console.log("response", response)
        return response;
    },
    error => {
        if (error.response.status === 401) {

            window.location.href = '/login';
        }
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
