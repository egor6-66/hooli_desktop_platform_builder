import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { routes } from 'shared/constanst';
import { tokens } from 'shared/lib';

const MainPage = lazy(() => import('./main'));
const AuthPage = lazy(() => import('./auth'));

export function Routing() {
    const authRoutes = [routes.login, routes.sendCode];

    return tokens.checkTokensFromLocalStorage() ? (
        <Routes>
            <Route path={routes.main} element={<MainPage />} />
            <Route path="*" element={<Navigate to={routes.main} replace />} />
        </Routes>
    ) : (
        <Routes>
            {authRoutes.map((path) => (
                <Route key={path} path={path} element={<AuthPage />} />
            ))}
            <Route path="*" element={<Navigate to={routes.login} replace />} />
        </Routes>
    );
}
