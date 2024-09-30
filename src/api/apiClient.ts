import axios from 'axios';

// Create an Axios instance with a base URL pointing to your backend
const apiClient = axios.create({
  baseURL: 'http://localhost:5272/api', // Replace with your backend's base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
