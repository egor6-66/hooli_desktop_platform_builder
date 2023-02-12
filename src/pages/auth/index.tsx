import { motion, AnimatePresence } from 'framer-motion';
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

    return (
        <div className={styles.auth}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    {routesDictionary[pathname]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default AuthPage;
