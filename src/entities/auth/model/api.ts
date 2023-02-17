import { useMutation } from '@tanstack/react-query';

import { $axios } from 'shared/configs';

export const handleLogin = () => {
    const loginFn = (data: { phone: string; code: string }) => $axios.post('authorization/login', data);
    return useMutation(loginFn);
};
