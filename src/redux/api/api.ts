import axios from 'axios';

import { TOKEN } from '../../constants';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL
});

api.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = localStorage.getItem(TOKEN);
    if (token !== null) {
      headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
