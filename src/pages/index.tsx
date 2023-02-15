import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { routes } from 'shared/constanst';
import { tokens } from 'shared/lib';

const MainPage = lazy(() => import('./main'));
const AuthPage = lazy(() => import('./auth'));

export function Routing() {
    const authRoutes = [routes.login, routes.sendCode];

    const privateRoutes = (
        <Routes>
            <Route index element={<MainPage />} />
            <Route path={routes.main} element={<MainPage />}>
                <Route index element={<div>messages</div>} />
                <Route path="messages" element={<div>messages</div>} />
                <Route path="tasks" element={<div>tasks</div>} />
            </Route>
            <Route path="*" element={<Navigate to={routes.main} replace />} />
        </Routes>
    );

    const publicRoutes = (
        <Routes>
            {authRoutes.map((path) => (
                <Route key={path} path={path} element={<AuthPage />} />
            ))}
            <Route path="*" element={<Navigate to={routes.login} replace />} />
        </Routes>
    );

    return tokens.checkTokensFromLocalStorage() ? privateRoutes : publicRoutes;
}
