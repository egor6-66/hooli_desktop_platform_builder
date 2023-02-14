import React, { InputHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

import { base } from 'shared/types';
import { Button, Input, Title } from 'shared/ui';

import styles from './styles.module.scss';

type Props = {
    register: (arg: any) => InputHTMLAttributes<HTMLInputElement>;
    handleSubmit: () => Promise<any>;
    isLoading: boolean;
    errors: FieldErrors<{ phone: base.Error }>;
};

function SendCodeForm(props: Props) {
    const { register, handleSubmit, isLoading, errors } = props;

    const disabledBtn = !!errors?.phone;
    const errorText = errors.phone?.message || errors.root?.message;

    return (
        <form onSubmit={handleSubmit} className={styles.sendCode}>
            <div className={styles.inputGroup}>
                <Title>Номер телефона</Title>
                <Input placeholder="Введите ваш номер телефона" {...register('phone')} isError={!!errors.phone} maxLength={12} />
                <Title isError>{errorText ? String(errorText) : ''}</Title>
            </div>

            <Button type="submit" isDisabled={disabledBtn} isLoading={isLoading}>
                Отправить
            </Button>
        </form>
    );
}

export default SendCodeForm;
