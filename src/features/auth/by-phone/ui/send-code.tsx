import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { SendCodeForm, api } from 'entities/auth/by-phone';
import { yup } from 'entities/auth/by-phone/lib';
import { routes } from 'shared/constanst';
import { useUpdatePhoneNumber } from 'shared/hooks';

type Props = {};
type SendCodeFormType = yup.SendCodeType;

function SendCodeFeature(props: Props) {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SendCodeFormType>({
        resolver: yupResolver(yup.sendCodeSchema),
    });

    const navigate = useNavigate();

    const { mutate: handleSendCode, isLoading, isError } = api.handleSendCode();

    const onsubmit = (data: SendCodeFormType) => {
        handleSendCode(
            { phone: useUpdatePhoneNumber(data.phone) },
            {
                onSuccess: () => navigate(routes.login),
                onError: () => setError('root', { message: 'Ошибка сервера' }),
            }
        );
    };

    return <SendCodeForm register={register} handleSubmit={handleSubmit(onsubmit)} isLoading={isLoading} errors={errors} />;
}

export default SendCodeFeature;
