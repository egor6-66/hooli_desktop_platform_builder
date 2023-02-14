import React, { InputHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

import { Button, Input, Title } from 'shared/ui';

import styles from './styles.module.scss';
import { base } from '../../../../../shared/types';

type Props = {
    register: (arg: any) => InputHTMLAttributes<HTMLInputElement>;
    handleSubmit: () => Promise<any>;
    isLoading: boolean;
    errors: FieldErrors<{ phone: base.Error; code: base.Error }>;
};

function LoginForm(props: Props) {
    const { register, handleSubmit, isLoading, errors } = props;

    const disabledBtn = errors.phone || errors.code;
    const errorText = errors.code?.message || errors.root?.message;

    return (
        <form onSubmit={handleSubmit} className={styles.login}>
            <div className={styles.inputGroup}>
                <Title>Номер телефона</Title>
                <Input placeholder="Введите ваш номер телефона" {...register('phone')} isError={!!errors.phone} maxLength={12} />
                <Title isError>{errors.phone ? String(errors.phone.message) : ''}</Title>
            </div>

            <div className={styles.inputGroup}>
                <Title>Код</Title>
                <Input placeholder=" Введите код из смс" {...register('code')} isError={!!errors.code} maxLength={4} />
                <Title isError>{errorText ? String(errorText) : ''}</Title>
            </div>

            <Button type="submit" isDisabled={!!disabledBtn} isLoading={isLoading}>
                Отправить
            </Button>
        </form>
    );
}

export default LoginForm;
