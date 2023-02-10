import React from 'react';

import { Button, Input } from 'shared/ui';

import styles from './styles.module.scss';

type Props = {
    value?: number | string;
};

function LoginForm(props: Props) {
    const { value } = props;

    return (
        <div>
            <Input />
            login
        </div>
    );
}

export default LoginForm;
