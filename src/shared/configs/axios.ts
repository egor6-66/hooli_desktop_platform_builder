import axios, { AxiosRequestConfig } from 'axios';

import { tokens } from '../lib';

const sessionId = navigator.userAgent.replace(/\s/g, '');

const config: AxiosRequestConfig = {
    baseURL: `${process.env.REACT_APP_URL_DEV}/api/${process.env.REACT_APP_API_VERSION}`,
    headers: {
        Authorization: `${process.env.BASIC}`,
        'X-Session-Id': sessionId,
    },
};

const $axios = axios.create(config);

$axios.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        // токены берем из лс, проблемы с куками в десктоп версии, надо будет разобраться и поменять логику
        const currentTokens = tokens.getFromLocalStorage();
        if (error.response.status === 401 && error.config && currentTokens && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                const res: any = await $axios.post('/authorization/refresh', currentTokens);
                if (res.data) {
                    const { access_token, refresh_token } = res.data.data;
                    tokens.add({ access_token, refresh_token });
                } else {
                    tokens.remove();
                    window.location.reload();
                }
                return await $axios.request(originalRequest);
            } catch (err) {
                console.log('Unauthorized');
                tokens.remove();
                window.location.reload();
            }
        }

        return Promise.reject(error);
    }
);

export default $axios;
