import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./main'));
const AuthPage = lazy(() => import('./auth'));

export function Routing() {
    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    );
}
