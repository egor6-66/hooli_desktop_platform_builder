import React from 'react';

import { LoginForm } from 'entities/auth/by-phone';

import styles from './styles.module.scss';

type Props = {};

function LoginFeature(props: Props) {
    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default LoginFeature;
