import React from 'react';

import { Routing } from 'pages';
import { useTheme } from 'shared/hooks';

import { withProviders, withQuery } from './providers';
import './index.scss';

function App() {
    useTheme('dark');

    return (
        <withQuery.QueryClientProvider client={withQuery.queryClient}>
            <Routing />
            <withQuery.ReactQueryDevtools initialIsOpen position="bottom-right" />
        </withQuery.QueryClientProvider>
    );
}

export default withProviders(App);
