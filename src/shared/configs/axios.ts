import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    baseURL: `${process.env.REACT_APP_URL_DEV}/api/${process.env.REACT_APP_API_VERSION}`,
    headers: {
        Authorization: `${process.env.BASIC}`,
    },
};

const $axios = axios.create(config);

$axios.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401) {
            try {
                return await $axios.request(originalRequest);
            } catch (err) {
                console.log('Unauthorized');
            }
        }

        return Promise.reject(error);
    }
);

export default $axios;
