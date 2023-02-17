import React from 'react';
import { Outlet } from 'react-router-dom';

import { MainHeaderWidget } from 'widgets/header';
import { ChatsListWidget } from 'widgets/left-sidebar';

import styles from './styles.module.scss';

function MainPage() {
    return (
        <div className={styles.main}>
            <ChatsListWidget />
            <MainHeaderWidget />
            <Outlet />
        </div>
    );
}

export default MainPage;
