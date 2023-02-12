import React, { InputHTMLAttributes } from 'react';

import { Button, Input, Title } from 'shared/ui';

import styles from './styles.module.scss';

type Props = {
    register: (arg: any) => InputHTMLAttributes<HTMLInputElement>;
    handleSubmit: () => Promise<any>;
    errors: any;
};

function LoginForm(props: Props) {
    const { register, handleSubmit, errors } = props;

    const disabledBtn = errors.phone?.message || errors.code?.message;

    return (
        <form onSubmit={handleSubmit} className={styles.login}>
            <div className={styles.inputGroup}>
                <Title>Номер телефона</Title>
                <Input placeholder="Введите ваш номер телефона" {...register('phone')} isError={!!errors.phone} maxLength={12} />
                <Title isError>{errors.phone?.message}</Title>
            </div>

            <div className={styles.inputGroup}>
                <Title>Код</Title>
                <Input placeholder=" Введите код из смс" {...register('code')} isError={!!errors.code} maxLength={4} />
                <Title isError>{errors.code?.message}</Title>
            </div>

            <Button type="submit" isDisabled={disabledBtn}>
                Отправить
            </Button>
        </form>
    );
}

export default LoginForm;
