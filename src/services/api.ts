import axios from 'axios';

export const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

export default api;
export const fetcher = (path: string) => api.get(path).then((res) => res.data);