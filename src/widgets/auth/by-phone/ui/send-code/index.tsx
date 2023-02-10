import React from 'react';
import { Link } from 'react-router-dom';

import { LoginFeature, SendCodeFeature } from 'features/auth/by-phone';
import { routes } from 'shared/constanst';

import styles from './styles.module.scss';

type Props = {};

function SendCodeWidget(props: Props) {
    return (
        <div>
            <SendCodeFeature />
            <Link to={routes.login}>Войти с кодом</Link>
        </div>
    );
}

export default SendCodeWidget;
