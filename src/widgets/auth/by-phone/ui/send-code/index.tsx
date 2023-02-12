import React from 'react';

import { SendCodeFeature } from 'features/auth/by-phone';
import { routes } from 'shared/constanst';
import { Link } from 'shared/ui';

import styles from './styles.module.scss';

type Props = {};

function SendCodeWidget(props: Props) {
    return (
        <div className={styles.sendCode}>
            <SendCodeFeature />
            <Link to={routes.login}>Войти с кодом</Link>
        </div>
    );
}

export default SendCodeWidget;
