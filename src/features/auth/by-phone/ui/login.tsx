import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { LoginForm, api } from 'entities/auth/by-phone';
import { yup } from 'entities/auth/by-phone/lib';
import { useViewerStore, viewerLib } from 'entities/viewer';
import { useUpdatePhoneNumber, useCrypto, useLocalStorage } from 'shared/hooks';
import { tokens } from 'shared/lib';

import { routes } from '../../../../shared/constanst';

type Props = {};
type LoginFormType = yup.LoginType;

function LoginFeature(props: Props) {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<LoginFormType>({
        resolver: yupResolver(yup.loginSchema),
    });

    const navigate = useNavigate();
    const { mutate: handleLogin, isLoading, isError } = api.handleLogin();
    const setViewer = useViewerStore.use.setData();

    const onSuccess = (response: any) => {
        const { access_token, refresh_token } = response.data.data;
        tokens.add({ access_token, refresh_token });
        setViewer(viewerLib.getSchema(response.data.data));
        window.location.href = '/main';
    };

    const onsubmit = (data: LoginFormType) => {
        handleLogin(
            { phone: useUpdatePhoneNumber(data.phone), code: data.code },
            {
                onSuccess,
                onError: () => setError('root', { message: 'Неверный номер или код' }),
            }
        );
    };

    return <LoginForm register={register} handleSubmit={handleSubmit(onsubmit)} isLoading={isLoading} errors={errors} />;
}

export default LoginFeature;
