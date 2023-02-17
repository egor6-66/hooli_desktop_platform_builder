import React, { lazy } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';

import { routes } from 'shared/constanst';
import { tokens } from 'shared/lib';

import authRoutes from './auth/routes';

const AuthPage = lazy(() => import('./auth'));
const MainPage = lazy(() => import('./main'));

function Routing() {
    const navigate = useNavigate();

    const privateRoutes = (
        <Routes>
            <Route index element={<MainPage />} />
            <Route path="main" element={<MainPage />}>
                <Route index element={<div>messages</div>} />
                <Route path="messages" element={<div>messages</div>} />
                <Route path="tasks" element={<div>tasks</div>} />
            </Route>
            {/* <Route path="*" element={<Navigate to={routes.main} replace />} /> */}
        </Routes>
    );

    const publicRoutes = (
        <Routes>
            {authRoutes}
            <Route path="*" element={<Navigate to={routes.auth} replace />} />
        </Routes>
    );

    return tokens.checkTokensFromLocalStorage() ? privateRoutes : publicRoutes;
}

export default Routing;
