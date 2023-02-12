import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import { SendCodeForm } from 'entities/auth/by-phone';
import { yup } from 'entities/auth/by-phone/lib';

import styles from './styles.module.scss';

type Props = {};
type SendCodeFormType = yup.SendCodeType;

function SendCodeFeature(props: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SendCodeFormType>({
        resolver: yupResolver(yup.sendCodeSchema),
    });

    const onsubmit = (data: SendCodeFormType) => {
        console.log('data', data);
    };

    return (
        <div>
            <SendCodeForm register={register} handleSubmit={handleSubmit(onsubmit)} errors={errors} />
        </div>
    );
}

export default SendCodeFeature;
