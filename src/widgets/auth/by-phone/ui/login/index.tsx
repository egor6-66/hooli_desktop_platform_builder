import React from 'react';
import { Link } from 'react-router-dom';

import { LoginFeature } from 'features/auth/by-phone';
import { routes } from 'shared/constanst';

import styles from './styles.module.scss';

type Props = {};

function LoginWidget(props: Props) {
    return (
        <div>
            <LoginFeature />
            <Link to={routes.sendCode}>Получить код</Link>
        </div>
    );
}

export default LoginWidget;
