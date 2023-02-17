import React, { InputHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

import { base } from 'shared/types';
import { Button, Input, Title } from 'shared/ui';

import styles from './styles.module.scss';

type Props = {
    register: (arg: any) => InputHTMLAttributes<HTMLInputElement>;
    handleSubmit: () => Promise<any>;
    isLoading: boolean;
    errors: FieldErrors<{ phone: base.Error; pass: base.Error }>;
};

function LoginForm(props: Props) {
    const { register, handleSubmit, isLoading, errors } = props;

    const disabledBtn = errors.phone || errors.pass;
    const errorText = errors.pass?.message || errors.root?.message;

    return (
        <form onSubmit={handleSubmit} className={styles.login}>
            <div className={styles.inputGroup}>
                <Title secondary>Введите Ваш корпоративный логин</Title>
                <Input placeholder="Логин" {...register('login')} isError={!!errors.phone} />
                <Title isError>{errors.phone ? String(errors.phone.message) : ''}</Title>
            </div>

            <div className={styles.inputGroup}>
                <Title secondary>Введите пароль</Title>
                <Input placeholder="Пароль" {...register('pass')} isError={!!errors.pass} />
                <Title isError>{errorText ? String(errorText) : ''}</Title>
            </div>

            <Button type="submit" isDisabled={!!disabledBtn} isLoading={isLoading}>
                Отправить
            </Button>
        </form>
    );
}

export default LoginForm;
