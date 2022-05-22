import axios from 'axios';

const axiosSetup = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});

const token = localStorage.getItem('authToken');
axiosSetup.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axiosSetup