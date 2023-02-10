import React from 'react';

import { withProviders, withQuery } from './providers';
import { Routing } from '../pages';
import './index.scss';

function App() {
    return (
        <withQuery.QueryClientProvider client={withQuery.queryClient}>
            <Routing />
            <withQuery.ReactQueryDevtools position="bottom-right" />
        </withQuery.QueryClientProvider>
    );
}

export default withProviders(App);
