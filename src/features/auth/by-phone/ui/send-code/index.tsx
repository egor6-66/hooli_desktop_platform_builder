import React from 'react';

import { SendCodeForm } from 'entities/auth/by-phone';

import styles from './styles.module.scss';

type Props = {};

function SendCodeFeature(props: Props) {
    return (
        <div>
            <SendCodeForm />
        </div>
    );
}

export default SendCodeFeature;
