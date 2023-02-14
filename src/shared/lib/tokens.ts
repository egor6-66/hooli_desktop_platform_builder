import Cookies from 'universal-cookie';

import { useCrypto } from '../hooks';

const cookies = new Cookies();

type Tokens = {
    access_token: string;
    refresh_token: string;
};

export const add = (tokens: Tokens) => {
    const accessEncoded = useCrypto(tokens.access_token, 'encode');
    const refreshEncoded = useCrypto(tokens.refresh_token, 'encode');
    window.localStorage.setItem('access_token', accessEncoded);
    window.localStorage.setItem('refresh_token', refreshEncoded);
    cookies.set('access_token', accessEncoded, { path: '/', domain: window.location.hostname });
    cookies.set('refresh_token', refreshEncoded, { path: '/', domain: window.location.hostname });
};

const getFromLsFn = () => ({
    access_token: window.localStorage.getItem('access_token'),
    refresh_token: window.localStorage.getItem('refresh_token'),
});

const getFromCookiesFn = () => ({
    access_token: cookies.get('access_token'),
    refresh_token: cookies.get('refresh_token'),
});

const decode = (tokens: Tokens) => {
    return {
        access_token: useCrypto(tokens.access_token, 'decode'),
        refresh_token: useCrypto(tokens.refresh_token, 'decode'),
    };
};

export const checkTokensFromLocalStorage = () => {
    const { access_token, refresh_token } = getFromLsFn();
    return !!(access_token && refresh_token);
};

export const checkTokensFromCookies = () => {
    const { access_token, refresh_token } = getFromCookiesFn();
    return !!(access_token && refresh_token);
};

export const getFromLocalStorage = () => {
    const { access_token, refresh_token } = getFromLsFn();
    if (access_token && refresh_token) {
        return decode({ access_token, refresh_token });
    }
    return null;
};

export const getFromCookies = () => {
    const { access_token, refresh_token } = getFromCookiesFn();
    if (access_token && refresh_token) {
        return decode({ access_token, refresh_token });
    }
    return null;
};

export const remove = () => {
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('refresh_token');
    cookies.remove('access_token', {
        path: '/',
        domain: window.location.hostname,
    });
    cookies.remove('refresh_token', {
        path: '/',
        domain: window.location.hostname,
    });
};
