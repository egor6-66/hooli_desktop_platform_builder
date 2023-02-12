import React from 'react';

import { LoginFeature } from 'features/auth/by-phone';
import { routes } from 'shared/constanst';
import { Link } from 'shared/ui';

import styles from './styles.module.scss';

type Props = {};

function LoginWidget(props: Props) {
    return (
        <div className={styles.login}>
            <LoginFeature />
            <Link to={routes.sendCode}>Получить код</Link>
        </div>
    );
}

export default LoginWidget;
