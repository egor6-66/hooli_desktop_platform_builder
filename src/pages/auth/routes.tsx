import React, { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

import { routes } from 'shared/constanst';

const AuthPage = lazy(() => import('.'));

const authRoutes = <Route path={routes.auth} element={<AuthPage />} />;

export default authRoutes;
