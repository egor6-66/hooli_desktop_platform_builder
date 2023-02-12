import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import { LoginForm } from 'entities/auth/by-phone';
import { yup } from 'entities/auth/by-phone/lib';

import styles from './styles.module.scss';

type Props = {};
type LoginFormType = yup.LoginType;

function LoginFeature(props: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormType>({
        resolver: yupResolver(yup.loginSchema),
    });

    const onsubmit = (data: LoginFormType) => {
        console.log('data', data);
    };

    return (
        <div>
            <LoginForm register={register} handleSubmit={handleSubmit(onsubmit)} errors={errors} />
        </div>
    );
}

export default LoginFeature;
