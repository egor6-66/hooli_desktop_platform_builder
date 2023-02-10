import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { withProviders } from './providers';
import queryClient from './providers/with-query';
import { Routing } from '../pages';
import './index.scss';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routing />
        </QueryClientProvider>
    );
}

export default withProviders(App);
