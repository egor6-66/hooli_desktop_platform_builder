import { useMutation } from '@tanstack/react-query';

import { $axios } from 'shared/configs';

export const handleSendCode = () => {
    const sendCodeFn = (data: { phone: string }) => $axios.post('authorization/send_code', data);
    return useMutation(sendCodeFn);
};

export const handleLogin = () => {
    const loginFn = (data: { phone: string; code: string }) => $axios.post('authorization/login', data);
    return useMutation(loginFn);
};
