import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from 'shared/constanst';

const MainPage = lazy(() => import('./main'));
const AuthPage = lazy(() => import('./auth'));

export function Routing() {
    const authRoutes = [routes.login, routes.sendCode];

    return (
        <Routes>
            {authRoutes.map((path) => (
                <Route key={path} path={path} element={<AuthPage />} />
            ))}
            <Route path={routes.main} element={<MainPage />} />
        </Routes>
    );
}
