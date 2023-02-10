import React, { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: () => ReactNode) =>
    function () {
        return (
            <BrowserRouter>
                <Suspense fallback="Loading...">{component()}</Suspense>
            </BrowserRouter>
        );
    };
