import axios from 'axios';
import axiosRetry from 'axios-retry';

export const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

axiosRetry(instance, { retryDelay: (retryCount) => {
    return retryCount * 1000;
  }});
