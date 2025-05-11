import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_DEEPSEEK_API_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("Base URL:", api.defaults.baseURL);
api.interceptors.request.use(
  (config) => {
    const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY; 
    if (apiKey) {
      config.headers.Authorization = `Bearer ${apiKey}`;
    } else {
      console.warn("API key is missing");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API request error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
