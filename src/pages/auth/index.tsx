import React from 'react';
import { useLocation } from 'react-router-dom';

import { routes } from 'shared/constanst';
import { LoginWidget, SendCodeWidget } from 'widgets/auth/by-phone';

import styles from './styles.module.scss';

type Props = {};

function AuthPage(props: Props) {
    const { pathname } = useLocation();

    const routesDictionary: { [index: string]: any } = {
        [routes.login]: <LoginWidget />,
        [routes.sendCode]: <SendCodeWidget />,
    };

    return <div className={styles.auth}>{routesDictionary[pathname]}</div>;
}

export default AuthPage;
